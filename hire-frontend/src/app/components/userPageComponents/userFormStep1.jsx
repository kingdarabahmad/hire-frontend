import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const UserFormStep1 = ({setActiveFormStep,userFormData,handleUserFormData,setProgress}) => {
  const [isNameEmpty,setIsNameEmpty]=useState(false)
  
  const handleNameForm=()=>{
    if(userFormData.name===""){
      setIsNameEmpty(true)
    }
    else{
      setIsNameEmpty(false)
      setActiveFormStep(2)
      setProgress(33)
    }
  }

  const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
      if(userFormData.name===""){
        setIsNameEmpty(true)
      }
      else{
        setIsNameEmpty(false)
        setActiveFormStep(2)
        setProgress(33)
      } 
    }
  }
  
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex items-center gap-8 '>
            <p className='text-3xl font-bold text-blue-700'>1</p>
            <h1 className='text-3xl font-bold tracking-wider'>What is your name?</h1>
        </div>
        
        <div className='flex gap-8 items-center'>
            
            <TextField name='name' id='name' fullWidth label="Name" variant='standard' required color='secondary' value={userFormData.name} onKeyDown={(e)=>handleKeyDown(e)} onChange={(e)=>handleUserFormData(e)}/>
        </div>

        <div className='flex justify-end gap-4'>
            <Button className='bg-blue-700 border-none outline-none text-white' variant='contained' onClick={()=>handleNameForm()}>Next</Button>
        </div>
        {isNameEmpty && (<Alert severity='error'>Field can't be Empty</Alert>)}
    </div>

  )
}

export default UserFormStep1