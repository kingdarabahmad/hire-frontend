import { Button, TextField } from '@mui/material'
import React from 'react'

const UserFormStep2 = ({setActiveFormStep,userFormData,handleUserFormData}) => {
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex items-center gap-8 '>
            <p className='text-3xl font-bold text-blue-700'>2</p>
            <h1 className='text-3xl font-bold tracking-wider'>What is your email?</h1>
        </div>

        <div className='flex gap-8 items-center'>
            <TextField name='email' id='email' fullWidth label="Email" variant='standard' required color='secondary' value={handleUserFormData.email} onChange={(e)=>handleUserFormData(e)}/>
        </div>

        <div className='flex gap-4 justify-between items-center'>
            <Button className='bg-blue-700 border-none outline-none text-white'  variant='contained' onClick={()=>setActiveFormStep(1)}>Back</Button>
            <Button className='bg-blue-700 border-none outline-none text-white'  variant='contained' onClick={()=>setActiveFormStep(3)}>Next</Button>
        </div>
    </div>
  )
}

export default UserFormStep2