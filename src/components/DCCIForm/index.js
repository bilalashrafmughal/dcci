import React from 'react'
import styled from 'styled-components'
import bg from './bg.jpeg'
import Form from './Form'

export default function DCCIForm() {
    return (
        <div className="">
            <MainHeading> Register yourself  </MainHeading>
            <BottomBorder />
            <div className="flex justify-between items-center px-12">
            <SubHeading> Become a Member </SubHeading>
            <StyledParagraph> <span> 15% discount </span> throughout their membership duration. On all Consultations.  </StyledParagraph>
            </div>

            <BgImageSection bg={bg}>

                <div className="w-full grid grid-col-1 md:grid-cols-2 pt-20 px-20">
                    {points.map(obj => (
                        <InfoBar className="flex space-x-12">
                            <DummyIcon />
                            <h4> {obj.text} </h4>
                        </InfoBar>
                    ))}

                </div>

            </BgImageSection>

            <div className="w-full md:-mt-36">
                <Form />
            </div>

            
        </div>
    )
}


const points = [
    {id: 1, text: "Patient Profile Creation"},
    {id: 1, text: "Pharm D's Counselling"},
    {id: 1, text: "Maintaining patient's electronic Medical Records"},
    {id: 1, text: "Medical Doctor Counselling"},
    {id: 1, text: "1 year membership plan with complete care and counselling of diabetes including diet and Nutritional Counselling"},
    {id: 1, text: "Medication Reminders via text for Members only"},
]


const InfoBar = styled.div`
margin-bottom: 25px;
    h4{
        font-weight: 600;
        color: white;
        font-size: 17px;
        
    }


`



const BottomBorder = styled.div`
    width: 80px;
    height: 3px;
    background: #92D8E0;
    display: inline-block;

`

const MainHeading = styled.h1`
    font-size: 35px;
    line-height: 150%;
    margin-bottom: 0;
    color: #215068;
    font-weight: 900;
    span{

    }
`

const SubHeading = styled.h3`
    color: #53BACB;
    font-size: 20px;
`
const StyledParagraph = styled.p`
    color: "#4F5458";
    font-size: 14px;
    span{
        font-weight: 700;
        color: #7890A3;
    }
`

const BgImageSection = styled.div`
    height: 90vh;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    border-radius: 20px;
`


const DummyIcon = ()=>{
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.83333 15.5C9.28105 15.5 8.83333 15.0523 8.83333 14.5V8.16667C8.83333 7.61438 9.28105 7.16667 9.83333 7.16667H14.5C15.0523 7.16667 15.5 7.61438 15.5 8.16667V14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H9.83333ZM1.5 8.83333C0.947714 8.83333 0.5 8.38562 0.5 7.83333V1.5C0.5 0.947715 0.947715 0.5 1.5 0.5H6.16667C6.71895 0.5 7.16667 0.947715 7.16667 1.5V7.83333C7.16667 8.38562 6.71895 8.83333 6.16667 8.83333H1.5ZM5.5 7.16667V2.16667H2.16667V7.16667H5.5ZM1.5 15.5C0.947714 15.5 0.5 15.0523 0.5 14.5V11.5C0.5 10.9477 0.947715 10.5 1.5 10.5H6.16667C6.71895 10.5 7.16667 10.9477 7.16667 11.5V14.5C7.16667 15.0523 6.71895 15.5 6.16667 15.5H1.5ZM2.16667 13.8333H5.5V12.1667H2.16667V13.8333ZM10.5 13.8333H13.8333V8.83333H10.5V13.8333ZM8.83333 1.5C8.83333 0.947715 9.28105 0.5 9.83333 0.5H14.5C15.0523 0.5 15.5 0.947715 15.5 1.5V4.5C15.5 5.05228 15.0523 5.5 14.5 5.5H9.83333C9.28105 5.5 8.83333 5.05228 8.83333 4.5V1.5ZM10.5 2.16667V3.83333H13.8333V2.16667H10.5Z" fill="#307BF6"/>
    </svg>
    
}
