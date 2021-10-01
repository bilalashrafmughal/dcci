import React from 'react'
import styled, { css } from 'styled-components'
import DateIcon from './dateIcon.PNG'

export default function TextField({error, helperText, ...rest}) {
    return (
        <div className="flex flex-col">        
        <StyledInput
        {...rest}
        error={error}       
        />
        {error ? <ErrorMessage> {helperText} </ErrorMessage> : "" }
        
        </div>
    )
}


const StyledInput = styled.input`
    width: 100%;
    border-radius: 30px;
    background: white;
    padding: 15px;
    padding-left: 20px;
    ${props => props.error && css`
        border: 2px solid red; 
    `}
    ${props => props.error && css`
        color:  red; 
    `}
    ::placeholder{
        color: #52646C;
        font-size: 16px;
        // padding-left: 20px;
    }
    :focus{
        outline: none;
    }

`
const ErrorMessage = styled.p`
    margin: 0;
    color: red;
    font-size: 14px;
    margin-left: 12px;
`
