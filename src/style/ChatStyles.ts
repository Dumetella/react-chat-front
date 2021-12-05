import styled, { DefaultStyledComponent } from "styled-components";

export const Divider = styled.div<DefaultStyledComponent>`
    width: 100%;
    border-top: 2px solid ${(props) => props.theme.palette.divider};
`

export const SimpleText = styled.div<DefaultStyledComponent>`
    font-family: ${(props) => props.theme.fonts.main};
`

export const MainBox = styled.div<DefaultStyledComponent>`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 0;
`

export const LeftColumn = styled.div<DefaultStyledComponent>`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 12rem;
    max-width: calc(1680px / 6);
    @media ${(props) => props.theme.breakpoints.md} {
        display: none;
    }
`

export const RightColumn = styled.div<DefaultStyledComponent>`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 3;
    &:before {
        box-sizing: inherit;
    }
`

export const RightOuterBox = styled.div<DefaultStyledComponent>`
    min-width: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    background-color: ${(props) => props.theme.palette.primary.dark};
    height: 100vh;
`

export const RightInnerBox = styled.div<DefaultStyledComponent>`
    flex-direction: column;
    grid-row-start: 1;
    grid-column-start: 1;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    display: flex;
`

export const RightBackgroundBox = styled.div<DefaultStyledComponent>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: ${(props) => props.theme.palette.background.paper};
    box-sizing: inherit;
`

export const RightBackground = styled.div<DefaultStyledComponent>`
    background-image: ${(props) => props.theme.type === 'light' ? 'url(images/bg.jpeg)' : 'none'};
    opacity: 1;
    background-size: cover;
    background-position: center center;
    background-color: inherit;
    height: 100%;
`

export const RightHeader = styled.div<DefaultStyledComponent>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    min-height: 3.5rem;
    flex: 0 0 auto;
    user-select: none;
    z-index: 1;
    width: 100%;
    background-color: ${(props) => props.theme.palette.primary.light};
`

export const HeaderUtils = styled.div<DefaultStyledComponent>`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-left: auto;
`

export const HeaderCaption = styled.div<DefaultStyledComponent>`
    padding-right: 25px;
`

export const BubblesBox = styled.div<DefaultStyledComponent>`
    width: 100%;
    flex: 1 1 auto;
    position: relative;
    box-sizing: inherit;
`

export const BubblesScrollable = styled.div<DefaultStyledComponent>`
    overflow-y: auto;
    scrollbar-width: thin;
    height: auto;
    display: block;
    width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
`

export const BubblesInner = styled.div<DefaultStyledComponent>`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    min-height: 100%;
    justify-content: flex-end;
    padding: 0 .8125rem;
    max-width: 728px;
`
