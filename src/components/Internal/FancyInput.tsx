import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components';

interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> {
  label?: string;
}



export default function FancyInput(props: InputProps): JSX.Element {

  const [isValid, setIsValid] = React.useState(false);

  const AbobaHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsValid(!!e.target.value)
  }


  return (
    <LInputContainer>
      <LInput
        {...props}
        onBlur={(e) => AbobaHandler(e)}
        className={`${props.className && props.className || ''} ${isValid ? 'is-valid' : ''}`}
      />
      <LLabel>{props.label}</LLabel>
    </LInputContainer>
  )
}

const LInputContainer = styled.div<DefaultStyledComponent>`
  margin-bottom: 1rem;
  background-color: #f5f5f5;
  position: relative;
  border-radius: 4px 4px 0 0;
  height: 56px;
  transition: background-color 500ms;
  &:hover {
    background-color: #ececec;
  };
  &:focus-within {
    background-color: #dcdcdc;
  };
`

const LLabel = styled.label<DefaultStyledComponent>`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
  pointer-events: none;
`

const LInput = styled.input<DefaultStyledComponent>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: ${(props) => props.theme.type === 'dark' ? '#6200ee' : '#157ce1'};
  border: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: ${(props) => props.theme.type === 'dark' ? '#6200ee' : '#157ce1'};
  }
  &:focus + label {
    color: ${(props) => props.theme.type === 'dark' ? '#6200ee' : '#157ce1;'};
  }
  &:focus + label,
  &.is-valid + label {
  transform: translateY(-100%) scale(0.75);
}
`
