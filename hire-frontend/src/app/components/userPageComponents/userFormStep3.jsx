import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const UserFormStep3 = ({ setActiveFormStep, userFormData, handleUserFormData, setUserFormData,setProgress }) => {

  const [isContactEmpty, setIsContactEmpty] = useState(false)

  const handleFormSubmit = () => {
    if (userFormData.contactNumber === "") {
      setIsContactEmpty(true)
    }
    else {
      setIsContactEmpty(false)
      localStorage.setItem('userData', JSON.stringify(userFormData))
      setProgress(100)
      setUserFormData(
        {
          name: "",
          email: "",
          contactNumber: "",
        }
      )
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (userFormData.contactNumber === "") {
        setIsContactEmpty(true)
      }
      else {
        setIsContactEmpty(false)
        localStorage.setItem('userData', JSON.stringify(userFormData))
        setProgress(100)
        setUserFormData(
          {
            name: "",
            email: "",
            contactNumber: "",
          }
        )
      }
    }
  }

  return (
    <div className='flex flex-col gap-4'>

      <div className='flex items-center gap-8 '>
        <p className='text-3xl font-bold text-blue-700'>3</p>
        <h1 className='text-3xl font-bold tracking-wider'>What is your Contact Number?</h1>
      </div>
      <div className='flex gap-8 items-center'>
        <TextField name='contactNumber' id='contactNumber' fullWidth label="Contact-Number" variant='standard' value={userFormData.contactNumber} required color='secondary' onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleUserFormData(e)} />
      </div>

      <div className='flex gap-4 justify-between items-center'>
        <Button className='bg-blue-700 border-none outline-none text-white' variant='contained' onClick={() => {
          setActiveFormStep(2)
          setProgress(33)
          }}>Back</Button>
        <Button className='bg-blue-700 border-none outline-none text-white' variant='contained' onClick={() => handleFormSubmit()} >Submit</Button>
      </div>
      {isContactEmpty && (<Alert severity='error'>Field can't be Empty</Alert>)}
    </div>
  )
}

export default UserFormStep3