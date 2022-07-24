import styled, { css } from "styled-components"
import { queries } from '../00-settings/Queries'

const Main = styled.div`
	display: grid;
	gap: var(--gap);

	${({ grid }) => grid == '2' && css`
		grid-template-columns: 360px 1fr;
    `};

	${({ grid }) => grid == '1' && css`
		grid-template-columns: 1fr;
    `};
	

	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: calc(var(--padding) * 2);

	
	@media screen and (max-width: ${queries.mq3}){
        grid-template-columns: 1fr;
		padding: var(--padding);
	}

`

export const MainSection = ({children, grid}) => <Main grid={grid}>{children}</Main>
    

