import React from 'react'
import {Controller} from 'react-hook-form'
import RadioGroup from '../Fields/RadioGroup'
import Select from '../Fields/Select'
import {get} from 'lodash'


export default function HookTextField({name, control, errors, ...rest}) {
    return (
        <Controller
        name={name}
        control={control}
        render={({field})=> (
            <RadioGroup
            {...field}
            {...rest}
            error={Boolean(get(errors, name))}
            helperText={get(errors, name)?.message}
           />                
            
        )}       
        
        />



    )
}
