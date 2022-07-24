import { bio } from '../../../data/bio'
import { queries } from '../../00-settings/Queries'
import styled from "styled-components"

const Stats = styled.table`
    width: 100%;

    @media screen and (max-width: ${queries.mq3}){
        display: none;
	}
`
const StatsTBody = styled.tbody`

`
const StatsTR = styled.tr`
    width: 100%;
`
const StatsTD = styled.td`
    &:nth-of-type(1){
        width: 100%;
        padding: 5px;
        padding-left: 0;
    }
    &:nth-of-type(2){ text-align: right; }
`

export const StatsComponent = () => {
    return (
        <Stats>
            <StatsTBody>
                {
                    bio.stats.map( el => 
                        <StatsTR key={el.id}>
                            <StatsTD>{el.title}</StatsTD>
                            <StatsTD>{el.quantity}</StatsTD>
                        </StatsTR>    
                    )
                }
            </StatsTBody>
        </Stats>
    )
}
