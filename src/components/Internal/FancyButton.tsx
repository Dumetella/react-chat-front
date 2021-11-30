import React from 'react'
import styled from 'styled-components'


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

const Button = styled.button`
  
`

const Ripple = styled.div`
    
`

const Label = styled.span`
    
`