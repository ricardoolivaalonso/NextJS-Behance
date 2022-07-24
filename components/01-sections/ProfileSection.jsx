import styled from "styled-components"
import { queries } from "../00-settings/Queries"

import { BioComponent } from "../02-components/profile/BioComponent"
import { ActionsComponent } from "../02-components/profile/ActionsComponent"
import { StatsComponent } from "../02-components/profile/StatsComponent"
import { InfoComponent } from "../02-components/profile/InfoComponent"

const Profile = styled.section`
    position: relative;
    z-index: 101;
    margin-top: -200px;
    padding: var(--padding);

    background-color: rgba(var(--white), 1);
    border-radius: 5px;

    @media screen and (max-width: ${queries.mq3}){
        margin-top: 0;
        padding: var(--padding) 0;
	}
`

export const ProfileSection = () => {
    return(
        <Profile>
            <BioComponent />
            <ActionsComponent />
            <StatsComponent /> 
            <InfoComponent />
        </Profile>
    )
}