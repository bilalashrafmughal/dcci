import React from 'react'
import styled, { css } from 'styled-components'
import DateIcon from './dateIcon.PNG'

export default function Select({error, helperText, options, ...rest}) {
    return (
        <div className="flex flex-col">        
        <StyledSelect
        {...rest}
        error={error}       
        >
            {options.map(obj => <option value={obj.value}> {obj.label} </option>)}

        </StyledSelect>
        {error ? <ErrorMessage> {helperText} </ErrorMessage> : "" }
        
        </div>
    )
}


const StyledSelect = styled.select`
    width: 100%;
    border-radius: 30px;
    background: white;
    padding: 15px;
    padding-left: 20px;
    ${props => props.error && css`
        border: 1px solid red; 
    `}
    ::placeholder{
        color: #52646C;
        font-size: 16px;
        padding-left: 20px;
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
