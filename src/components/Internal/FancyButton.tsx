import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'


interface LoginButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick?: () => void,
    text?: string;
}

export default function FancyButton(props: LoginButtonProps): JSX.Element {
    return (
        <Button onClick={props.onClick}>
            <Label>{props.text}</Label>
            <Ripple />
        </Button>
    )
}

const Button = styled.button<DefaultStyledComponent>`
    width: 100%;
    display: inline-flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: currentcolor none 0px;
    border: 0px none;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.type === 'dark' ? '#8774E1' : '#FFF'};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    min-height: 3rem;
    &:hover{
        background-color: ${(props) => props.theme.type === 'dark' ? '#FFF' : '#e3e3e3'};
        color: ${(props) => props.theme.type === 'dark' ? '#000' : '#157ce1'};
    }
`

const Ripple = styled.div<DefaultStyledComponent>`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    inset: 0px;
    border-radius: inherit;
    box-sizing: inherit;
    cursor: pointer;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: rgb(102, 114, 125);
`

const Label = styled.span`
    
`