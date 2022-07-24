import styled from "styled-components"
import { queries } from '../../00-settings/Queries'
import { ButtonElement } from '../../03-elements/ButtonElement'

const Actions = styled.div`
    display: grid;
    gap: 5px;
    margin: var(--padding) 0;

    @media screen and (max-width: ${queries.mq3}){ grid-template-columns:  1fr 1fr; }
    @media screen and (max-width: ${queries.mq1}){ grid-template-columns:  1fr; }
`

export const ActionsComponent = () => {
    return (
        <Actions>
            <ButtonElement type="cta">Seguir</ButtonElement>
            <ButtonElement type="button">Mensaje</ButtonElement>
        </Actions>
    )
}
