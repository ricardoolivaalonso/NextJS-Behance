import styled from "styled-components"
import { queries } from "../00-settings/Queries"
import { LogoElement } from "../03-elements/LogoElement"

const Footer = styled.header`
    display: grid;
    padding: var(--padding);
    width: 100%;

    & svg { 
        width: 62px; 
        fill: rgba(var(--black), 1); 
    }

    @media screen and (max-width: ${queries.mq3}){ 
        justify-content: center;
    }
`

export const FooterSection = () => {
    return(
        <Footer>
            <LogoElement />
        </Footer>
    )
}