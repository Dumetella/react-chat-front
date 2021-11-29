import styled, { createGlobalStyle } from "styled-components"

export const AppContainer = styled.div`
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
    border-color: #0f0f0f;
    display: flex;
`

export const GlobalBackground = createGlobalStyle`
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    margin: 0px;
    color: rgb(255, 255, 255);
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    background-color: rgb(24, 24, 24);
}
`