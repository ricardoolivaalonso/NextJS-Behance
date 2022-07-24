import styled from "styled-components"
import { CategoriesComponent } from "../02-components/projects/CategoriesComponent"
import { ListComponent } from "../02-components/projects/ListComponent"

const Projects = styled.section`
    display: grid;
    gap: var(--gap);
    align-content: start;
`
export const ProjectsSection = ({path}) => {
    return(
        <Projects>
            <CategoriesComponent />
            <ListComponent path={path}/>
        </Projects>
    )
}