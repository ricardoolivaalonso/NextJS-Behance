import styled from "styled-components"
import { useRef, useEffect } from "react"
import { queries } from "../00-settings/Queries"
import { FontMenu } from "../00-settings/Mixins"

import { AuthComponent } from "../02-components/header/AuthComponent"
import { FormComponent } from "../02-components/header/FormComponent"
import { MenuComponent } from "../02-components/header/MenuComponent"
import { MenuLink } from "../02-components/header/MenuComponent"

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    gap: var(--gap);
    
    padding: 0 var(--padding);
    width: 100%;
    height: 55px;
    border-bottom: 1px solid rgba(var(--white), .1);

    @media screen and (max-width: ${queries.mq3}){
        height: 100vh;
        width: 300px;
        padding: var(--padding);
        transform: translateX(-100%);

        grid-template-columns: 1fr;
        grid-auto-flow: row;
        align-content: start;
        background-color: rgba(var(--white), 1);
        transition: transform 500ms;
        gap: calc(var(--padding)*2);

        ${MenuLink}{ ${FontMenu(16, 'rgb(25, 25, 25)')}; }
        svg { fill: rgba(var(--black), 1); }
        input{ 
            &, &::placeholder{ color: rgba(var(--black), 1);  }
        }
	}

    @media screen and (max-width: ${queries.mq1}){ width: 100%; }

    &.is-header-active{
        background-color: rgba(var(--white), 1);
        ${MenuLink}{ ${FontMenu(16, 'rgb(25, 25, 25)')}; }
        svg { fill: rgba(var(--black), 1); }
        input{ 
            &, &::placeholder{ color: rgba(var(--black), 1);  }
        }

    }
    &.is-header-visible{ 
        transform: translateX(0%);
        transition: transform 500ms;
    }
`
const Trigger = styled.a`
    width: 21px;
    height: 21px;
    cursor: pointer;

    @media screen and (min-width: ${queries.mq3}){ 
        display: none; 
    }
`

const TriggerOpen = styled(Trigger)`
    position: fixed;
    left: var(--padding);
    top: var(--padding);
    z-index: 200;
    
    background-image: repeating-linear-gradient(to top, rgba(var(--white), 1) 0 4px, transparent 4px 8px);
    mix-blend-mode: difference;
`
const TriggerHide = styled(Trigger)`
    background-image: 
        linear-gradient(to bottom, transparent 0 9px, rgba(var(--black), 1) 9px 12px, transparent 12px 21px),
        linear-gradient(to right, transparent 0 9px, rgba(var(--black), 1) 9px 12px, transparent 12px 21px)
    ;
    transform: rotateZ(45deg);
`

export const HeaderSection = () => {
    const headerRef = useRef()

    const getScrollFunc = () => {
        if (window.matchMedia(`(min-width: ${queries.mq3})`).matches) {
            window.pageYOffset > 50 ?
            headerRef.current.classList.add('is-header-active') :
            headerRef.current.classList.remove('is-header-active')
        }
        else{
            headerRef.current.classList.remove('is-header-active')
        }
    }

    const showHeader = () => headerRef.current.classList.add('is-header-visible')
    const hideHeader = () => headerRef.current.classList.remove('is-header-visible')

    useEffect(()=>{
        window.addEventListener('scroll', getScrollFunc)
        window.addEventListener('resize', getScrollFunc)

        return () => {
            window.removeEventListener('scroll', getScrollFunc)
            window.removeEventListener('resize', getScrollFunc)
        }
    })

    return(
        <>
            <TriggerOpen onClick={showHeader} />
            <Header ref={headerRef}>
                <TriggerHide onClick={hideHeader} />
                <MenuComponent />
                <FormComponent />
                <AuthComponent />     
            </Header>
        </>
    )
}