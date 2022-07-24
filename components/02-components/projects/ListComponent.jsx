import styled from "styled-components"
import { projects } from '../../../data/projects'
import { queries } from '../../00-settings/Queries'

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: var(--gap);

    @media screen and (min-width: ${queries.mq5}){ grid-template-columns: repeat(4, 1fr); }
    @media screen and (max-width: ${queries.mq4}){ grid-template-columns: repeat(2, 1fr); }
    @media screen and (max-width: ${queries.mq3}){ grid-template-columns: repeat(3, 1fr); }
    @media screen and (max-width: ${queries.mq2}){ grid-template-columns: repeat(2, 1fr); }
    @media screen and (max-width: ${queries.mq1}){ grid-template-columns: repeat(1, 1fr); }
`
const Item = styled.a`
    position: relative;
    aspect-ratio: 3.8/3;
    overflow: hidden;
    border-radius: 5px;

`
const ItemImage = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
export const ListComponent = ({path}) => {
    let current = !path ? projects['home'] : projects[path]

    return (
        <List>
            {
                current.map( el => 
                    <Item key={el.id}>
                        <ItemImage src={`assets/images/${el.src}`}/>
                    </Item>        
                )
            }
        </List>
    )
}
