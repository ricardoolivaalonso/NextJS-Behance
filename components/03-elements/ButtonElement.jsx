import React from 'react'

import styled, { css } from 'styled-components'
import { FontMenu } from '../00-settings/Mixins.jsx'

const Button = styled.button`
    ${FontMenu(14, )};
    
    padding: 0 var(--padding);
    height: 36px;
    border-radius: var(--radius);
    background-color: rgba(var(--white), 1);
    color: rgba(var(--black), 1);
    border: 1px solid rgba(var(--gray), .25);
    cursor: pointer;

    ${({ type }) => type === 'cta' && css`
        background-color: rgba(var(--blue), 1);
        color: rgba(var(--white), 1);
        border: 1px solid rgba(var(--blue), .1);
    `};

`

export const ButtonElement = ({children, type}) => {

    return (
        <Button type={type}>{children}</Button>
    )
}
