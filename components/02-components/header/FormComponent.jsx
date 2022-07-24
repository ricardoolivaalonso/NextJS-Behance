import styled from 'styled-components'
import { queries } from '../../00-settings/Queries'

const Form = styled.form`
    display: grid;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`
const FormInput = styled.input`
    width: 100%;
    max-width: 400px;
    height: 35px;
    margin: 0 auto;
    padding: 0 calc(var(--padding)/2);

    border-radius: var(--radius);
    background-color: rgba(var(--white), .5);
    border: 1px solid rgba(var(--gray), 1);

    &, &::placeholder{ color: rgba(var(--white), 1); }

    @media screen and (max-width: ${queries.mq1}){ max-width: 100%; }
`

export const FormComponent = () => {
    return (
        <Form>
            <FormInput type="text" id="form-input" placeholder='Buscar'/>
        </Form>
    )
}
