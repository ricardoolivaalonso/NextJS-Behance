import styled from "styled-components"
import { FontMenu } from '../../00-settings/Mixins'
import { projects } from "../../../data/projects"
import { useSession } from "next-auth/react"

const Categories = styled.section`
    display: grid;
    width: 100%;
    overflow: hidden;
`
const CategoriesList = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
`
const CategoriesItem = styled.a`
    ${FontMenu(14, )};
    padding: 5px calc(var(--padding) * .75);
    background-color: rgba(var(--black), 1);
    border-radius: var(--radius) ;
`

export const CategoriesComponent = () => {
    const { data, status } = useSession()

    return (
        <Categories>
            <CategoriesList>
                {
                    projects.categories.map( el => {
                        if(status === 'authenticated'){
                            return <CategoriesItem key={el.id}>{el.title}</CategoriesItem>
                        }
                        else if(status !== 'authenticated' && !el.auth){
                            return <CategoriesItem key={el.id}>{el.title}</CategoriesItem>
                        }
                    })
                }
                                 

            </CategoriesList>
        </Categories>
    )
}
