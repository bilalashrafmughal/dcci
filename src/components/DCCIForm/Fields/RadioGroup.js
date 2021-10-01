import React from 'react'
import styled from 'styled-components'

export default function RadioGroupComponent({name, options, ...rest}) {
    return (
        <>
      
          {options.map(obj => (
            <StyledRadioGroup className="flex items-center">
             
              <input type="radio" name={name} {...rest} />
              <StyledLabel>
                  {obj.label}
              </StyledLabel>
              </StyledRadioGroup>
          ))}
          
     </>

    )
}


const StyledLabel = styled.label`
    color: white;
    font-weight: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 10px;
`

const StyledRadioGroup = styled.div`
    input[type= radio]{
        border: 0px;
        width: 30px;
        color: red;
    height: 1.5em;
    }

`
