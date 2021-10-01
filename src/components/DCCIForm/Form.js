import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import HookTextField from './Hooks/HookTextField'
import HookSelect from './Hooks/HookSelect'
import HookRadio from './Hooks/HookRadio'


const schema = yup.object().shape({
    full_name: yup.string().required("Full Name is required").min(4, "Name is less then 3 characters"),
    dob: yup.date().required("Date of birth is required").typeError("Date of birth is requird"),
    gender: yup.number().required("Please Select Gender"),
    mobile_number: yup.number().required("Mobile number is required").typeError("Mobile Number required"),
    email: yup.string().email("Please Enter Valid Email").required("Email is required"),
    home_address: yup.string().required("Home Address is required").min(6, "Address is less then 6 charecters"),
    useInsuline: yup.string().required("Please Select One Answer"),
    useDiabaties: yup.string().required("Please Select One Answer"),
})

const defaultValues = {
    full_name: "",
    dob: "",
    gender: 0,
    mobile_number: null,
    emai: "",
    home_address: "",
    useInsuline: "",
    useDiabaties: ""
}


export default function Form() {


    const {control, handleSubmit, watch, setValue, reset, formState} = useForm({
        mode: "onChange",
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    })
    const {errors} = formState

    const onSubmit = (data)=>{
        alert("form submited succesfully")
        console.log(data)
    }



    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} >
            <FormHeading> Fill the form and press submit </FormHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
            <HookTextField
            control={control}
            name="full_name"
            errors={errors}
            label="Your Full Name"
            />
            <HookTextField
            control={control}
            type="date"
            name="dob" 
            errors={errors}
            label="Date of Birth"
            />
            <HookSelect
            name="gender"
            label="Gender"
            control={control}
            errors={errors}
            options={[
                {label: "Male", value: 1},
                {label: "Female", value: 2}
            ]}
            />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
            <HookTextField
            control={control}
            type="number"
            name="mobile_number" 
            errors={errors}
            label="Mobile phone # (WhatsApp active)"
            />
             <HookTextField
            control={control} 
            name="email" 
            errors={errors}
            label="Email"
            />
            </div>
            
            <div className="mb-10">

            <HookTextField
            control={control}
            name="home_address" 
            errors={errors}
            label="Home Address"
            />

            </div>

            <div className="mb-10 grid grid-cols-1 md:grid-cols-2">

                <div className="flex space-x-10 items-center">
                    <StyledQuestions>
                        Do you use insuline?
                    </StyledQuestions>
                    <HookRadio
                name="useInsuline" 
                options={[
                    {label: "Yes", value: "yes"},
                    {label: "No", value: "no"},
                ]}
                control={control}
                errors={errors}

                />
                </div>
                <div className="flex space-x-10 items-center">
                    <StyledQuestions>
                        Diabetic Medication?
                    </StyledQuestions>
                    <HookRadio
                name="useDiabaties" 
                options={[
                    {label: "Yes", value: "yes"},
                    {label: "No", value: "no"},
                ]}
                control={control}
                errors={errors}

                />
                </div>

            </div>

            <div className="flex space-x-14 items-center justify-center">
                <StyledButton
                onClick={()=> reset(defaultValues)}
                >
                    Clear
                </StyledButton>
                <StyledButton type="submit">
                    Submit
                </StyledButton>
            </div>

           
        </FormContainer>
    )
}

const StyledButton = styled.button`
    width: 150px;
    text-align: center;
    border: 2px solid white;
    border-radius: 30px;
    padding: 10px 5px;
    color: white;
    background: transparent;
` 
const StyledQuestions = styled.label`
    color: white;
    font-size: 18px;
    font-weight: 500;
    
`

const FormContainer = styled.form`
    
    width: 100%;
    border-radius: 60px;
    background: #3BA5B4;
    padding: 40px;
`

const FormHeading = styled.h4`
    color: white;
    font-size: 16px;
    font-weight: 500px;
    line-height: 150%;
    margin: 15px;
`
