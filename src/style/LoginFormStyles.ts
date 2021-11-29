import Input from "../components/Internal/Input";
import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`

export const Form = styled.form`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 95%;
  max-width: 300px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 8%), 0 0 15px 0 rgb(0 0 0 / 2%), 0 0 20px 4px rgb(0 0 0 / 6%);
`

export const InputContainer = styled.div`
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
export const SInput = styled(Input)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  caret-color: #6200ee;
  border: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  color: rgba(0, 0, 0, 0.87);
  transition: border 500ms;
  padding: 20px 16px 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: #6200ee;
  }
  &:focus + label {
  color: #6200ee;
}
`

export const Label = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  color: rgba(0, 0, 0, 0.5);
  transform-origin: left top;
  user-select: none;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms;
`

export const Header = styled.h2`
  margin: 0px 0px 20px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`