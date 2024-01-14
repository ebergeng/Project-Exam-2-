import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #003366;
        --color-secondary: #52A49A;
        --color-accent: #E87B7B;
        --color-background: #F4F4F4; 
        --color-foreground: #333333; 
        --box-shadow: 2px 1px 3px #333333;
    }
`;

export default GlobalStyle;
