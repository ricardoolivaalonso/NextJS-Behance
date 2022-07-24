import { createGlobalStyle } from "styled-components"

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Acumin';
        src: url('./assets/fonts/acumin.woff2') format('woff2');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Acumin';
        src: url('./assets/fonts/acumin-semibold.woff2') format('woff2');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Acumin';
        src: url('./assets/fonts/acumin-bold.woff2') format('woff2');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Acumin';
        src: url('./assets/fonts/acumin-black.woff2') format('woff2');
        font-weight: 900;
    }
`
