import { Button, TextField } from '@mui/material'
import React from 'react'

const UserFormStep1 = ({setActiveFormStep,userFormData,handleUserFormData}) => {
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex items-center gap-8 '>
            <p className='text-3xl font-bold text-blue-700'>1</p>
            <h1 className='text-3xl font-bold tracking-wider'>What is your name?</h1>
        </div>
        
        <div className='flex gap-8 items-center'>
            
            <TextField name='name' id='name' fullWidth label="Name" variant='standard' required color='secondary' value={userFormData.name} onChange={(e)=>handleUserFormData(e)}/>
        </div>

        <div className='flex justify-end gap-4'>
            <Button className='bg-blue-700 border-none outline-none text-white' variant='contained' onClick={()=>setActiveFormStep(2)}>Next</Button>
        </div>
    </div>

  )
}

export default UserFormStep1