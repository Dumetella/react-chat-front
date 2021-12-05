import styled, { createGlobalStyle, DefaultStyledComponent } from "styled-components"

export const AppContainer = styled.div<DefaultStyledComponent>`
    min-height: 100%;
    width: 100%;
    margin: 0 auto;
    max-width: 1680px;
    height: 100%;
    border-top-width: 0;
    border-right-width: 1px;
    border-bottom-width: 0;
    border-left-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.palette.divider};
    display: flex;
`

export const Global = createGlobalStyle`
html,
body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.default};
    font-family: ${(props) => props.theme.fonts.main};
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
}
`