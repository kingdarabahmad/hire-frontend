"use client"
import React, { useState } from 'react'
import UserForm from '../components/userPageComponents/userForm'
import { LinearProgress } from '@mui/material'

const UserPage = () => {
  const [progress,setProgress]=useState(0)
  return (
    <div className='flex flex-col'>
        <LinearProgress variant='determinate' value={progress}/>
        <UserForm setProgress={setProgress}/>
    </div>
  )
}

export default UserPage