import styled from 'styled-components'
import Link from 'next/link'
import { header } from '../../../data/header.js'
import { queries } from '../../00-settings/Queries.js'
import { ButtonElement } from '../../03-elements/ButtonElement.jsx'
import { useSession } from "next-auth/react"

const Auth = styled.nav`
    display: grid;
    align-items: center;
`
const AuthList = styled.ul`
    display: grid;
    grid-auto-flow: column;
    gap: 5px;

    @media screen and (max-width: ${queries.mq3}){
        grid-template-columns: 1fr;
        grid-auto-flow: row;

        button{
            width: 100%;
        }
	}
`
const AuthItem = styled.li`

`

export const AuthComponent = () => {
    const { data, status } = useSession()
  
    return (
        <>
            <Auth>
                <AuthList>
                    {
                        status === 'authenticated' ? (
                            <AuthItem key={header.auth[1].id}>
                                <Link href="/api/auth/signout">
                                    <a><ButtonElement type={header.auth[1].type}>{header.auth[1].title}</ButtonElement></a>
                                </Link>
                            </AuthItem>
                        ) 
                        :   
                        (
                            <AuthItem key={header.auth[0].id}>
                                <Link href="/api/auth/signin">
                                    <a><ButtonElement type={header.auth[0].type}>{header.auth[0].title}</ButtonElement></a>
                                </Link>
                            </AuthItem>
                        )    
                    }
                </AuthList>
            </Auth>
        </>
    )
}
