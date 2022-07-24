import { createGlobalStyle } from "styled-components"

export const Base = createGlobalStyle`
    body{
        width: 100%;
        color: rgba(var(--black), 1);
    }
    ul{
        list-style: none;
    }       
    a{
        cursor: pointer;
    } 
    button,
    input{
        appearance: none;
        background: none;
        margin: 0;
        padding: 0;
        border-radius: 0;
        border: 0;
        color: inherit;
    }
`