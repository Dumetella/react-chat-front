import React from 'react'

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export default function Input(props: InputProps): JSX.Element {
    return (
        <input type={props.type} onClick={props.onClick}>

        </input>
    )
}
