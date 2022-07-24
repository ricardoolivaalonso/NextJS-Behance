import styled from "styled-components"
import { FontMenu } from '../../00-settings/Mixins'
import { queries } from '../../00-settings/Queries'

const Info = styled.p`
    ${FontMenu(11, 'rgb(25, 25, 25)', null)};
    width: 100%;
    text-align: center;
    margin-top: var(--padding);

    @media screen and (max-width: ${queries.mq3}){ display: none; }
`

export const InfoComponent = () => <Info>MIEMBRO DESDE: 8 DE MAYO DE 2020</Info>
