import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'

interface FancySwitchProps {
    onClick?: () => void;
    width?: number;
    padding?: number;
    height?: number;
}

export default function FancySwitch(props: FancySwitchProps): JSX.Element {
    return (
        <SSwitch>
            <SInput type="checkbox" onClick={props.onClick}></SInput>
            <SToggle className="switch"></SToggle>
        </SSwitch>
    )
}

interface SSWitchProps extends DefaultStyledComponent {
    width?: number;
    padding?: number;
    height?: number;
}

const SSwitch = styled.label<SSWitchProps>`
    cursor: pointer;
    background: #15273b;
    padding: 5px;
    width: 60px;
    height: 35px; // height = width / 2 + padding
    border-radius: 17.5px; // border-radius = height / 2
`

const SInput = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked {
    + .switch {
        grid-template-columns: 1fr 1fr 0fr; 
        &::after {
            background-color: rgb(135, 116, 225);
        }
    }
}
`

const SToggle = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: .2s;
    &::after {
        content: '';
        border-radius: 50%;
        background: #ccc;
        grid-column: 2;
        transition: background .2s;
    }
`


