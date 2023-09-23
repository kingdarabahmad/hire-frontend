"use client"
import React, { useState } from 'react'
import UserFormStep1 from './userFormStep1'
import UserFormStep2 from './userFormStep2'
import UserFormStep3 from './userFormStep3'

const UserForm = () => {

    const [activeFormStep,setActiveFormStep]=useState(1)
    const [userFormData,setUserFormData]=useState({
        name:"",
        email:"",
        contactNumber:"",
    })

    console.log(userFormData)

    //handle userFormData
    const handleUserFormData=(event)=>{
        const {name,value}=event.target;
        setUserFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
  return (
    <div className='my-44 mx-64 p-10'> 
       { activeFormStep==1 && (<UserFormStep1 userFormData={userFormData} setActiveFormStep={setActiveFormStep} handleUserFormData={handleUserFormData}/>) }
       { activeFormStep===2 && (<UserFormStep2 userFormData={userFormData} setActiveFormStep={setActiveFormStep} handleUserFormData={handleUserFormData}/>) }
       { activeFormStep===3 && (<UserFormStep3 userFormData={userFormData} setActiveFormStep={setActiveFormStep} handleUserFormData={handleUserFormData}/>) }

    </div>
  )
}

export default UserForm