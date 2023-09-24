import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import validator from 'validator'

const UserFormStep2 = ({setActiveFormStep,userFormData,handleUserFormData,setProgress}) => {

  const [isEmailEmpty,setIsEmailEmpty]=useState(false)
  const [isValidEmail,setIsValidEmail]=useState(true)

  const handleEmailForm=()=>{
    if(userFormData.email===""){
      setIsEmailEmpty(true)
    }
    else{
      if(validator.isEmail(userFormData.email)){
        setIsValidEmail(true)
        setIsEmailEmpty(false)
        setActiveFormStep(3)
        setProgress(66)
      }
      else{
        isValidEmail(false)
      }
    }
  }

  const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
      if(userFormData.email===""){
        setIsEmailEmpty(true)
      }
      else{
        if(validator.isEmail(userFormData.email)){
          setIsValidEmail(true)
          setIsEmailEmpty(false)
          setActiveFormStep(3)
          setProgress(66)
        }
        else{
          setIsValidEmail(false)
        }
      } 
    }
  }
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex items-center gap-8 '>
            <p className='text-3xl font-bold text-blue-700'>2</p>
            <h1 className='text-3xl font-bold tracking-wider'>What is your email?</h1>
        </div>

        <div className='flex gap-8 items-center'>
            <TextField name='email' id='email' fullWidth label="Email" variant='standard' required color='secondary' value={handleUserFormData.email} onKeyDown={(e)=>handleKeyDown(e)} onChange={(e)=>handleUserFormData(e)}/>
        </div>

        <div className='flex gap-4 justify-between items-center'>
            <Button className='bg-blue-700 border-none outline-none text-white'  variant='contained' onClick={()=>{
              setActiveFormStep(1)
              setProgress(0) 
              }}>Back</Button>
            <Button className='bg-blue-700 border-none outline-none text-white'  variant='contained' onClick={()=>handleEmailForm()}>Next</Button>
        </div>
        {isEmailEmpty && (<Alert severity='error'>Field can't be empty</Alert>)}
        {!(isValidEmail) && (<Alert severity='error'>Enter a valid Email</Alert>)}

    </div>
  )
}

export default UserFormStep2