import { createGlobalStyle } from "styled-components"

export const Reset = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;   
        font-family: 'Acumin', sans-serif;
    }
`