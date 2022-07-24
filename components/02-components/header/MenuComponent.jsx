import styled from 'styled-components'
import Link from 'next/link'
import { header } from '../../../data/header'
import { queries } from '../../00-settings/Queries'
import { FontMenu } from '../../00-settings/Mixins'
import { LogoElement } from '../../03-elements/LogoElement'
import { useSession } from "next-auth/react"

const Menu = styled.nav`
   display: grid;
   align-items: center;
`
const MenuList = styled.ul`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: var(--gap);
    height: 100%;

    @media screen and (max-width: ${queries.mq3}){
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        align-content: start;
        gap: 10px;
	}
`
const MenuItem = styled.li`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    height: 100%;
`
export const MenuLink = styled.a`
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
`

const border = "2px"; 

const MenuLinkGeneric = styled(MenuLink)`
    ${FontMenu(16, )};
    border-bottom: ${border} solid transparent;
    border-top: ${border} solid transparent;

    &:hover{ 
        @media (hover: hover){  
            border-bottom: ${border} solid rgba(var(--white), 1); 
        }
    }
`
export const MenuLinkHome = styled(MenuLink)`
    & svg { 
        width: 82px; 
        fill: rgba(var(--white), 1);
    }
`

export const MenuComponent = () => {
    const { data, status }  = useSession()

    return (
        <Menu>
            <MenuList>
                <MenuItem>
                    <Link href='/home'>
                        <MenuLinkHome>
                            <LogoElement /> 
                        </MenuLinkHome>
                    </Link>
                </MenuItem>
                {
                    header.menu.map( el => {
                        if(status === 'authenticated'){
                            return (
                                <MenuItem key={el.id} >
                                    <Link href={el.url}>
                                        <MenuLinkGeneric>{el.title}</MenuLinkGeneric>
                                    </Link>
                                </MenuItem>   
                            )
                        } 
                        else if(status !== 'authenticated' && !el.auth){
                            return (
                                <MenuItem key={el.id} >
                                    <Link href={el.url}>
                                        <MenuLinkGeneric>{el.title}</MenuLinkGeneric>
                                    </Link>
                                </MenuItem>   
                            )
                        }
                    })
                }
            </MenuList>
        </Menu>
    )
}



