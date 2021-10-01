import React from 'react'
import {Controller} from 'react-hook-form'
import TextField from '../Fields/TextField'
import Select from '../Fields/Select'
import {get} from 'lodash'


export default function HookTextField({name, label, control, errors, ...rest}) {
    return (
        <Controller
        name={name}
        control={control}
        render={({field})=> (
            <Select
            {...field}
            {...rest}
            placeholder={label}
            error={Boolean(get(errors, name))}
            helperText={get(errors, name)?.message}
           / >
                
            
        )}       
        
        />



    )
}
