"use client"
import React, { useState } from 'react'
import InstructionModal from '../components/browserPageComponents/instructionModal'
import { Button } from '@mui/material';
import SumbitTestModal from '../components/browserPageComponents/sumbitTestModal';

const BrowserPage = () => {
  const [openModal,setOpenModal]=useState(true);
  const [testModal,setTestModal]=useState(false)
  return (
    <div className='w-full'>
      <button onClick={()=>setOpenModal(true)} className='absolute top-0 right-36 bg-pink-700 p-2 text-sm rounded-md m-2 text-white font-bold w-[150px] '>
        Show Instructions
      </button>
      <button onClick={()=>setTestModal(true)} className='absolute top-0 right-4 bg-green-700 p-2 text-sm rounded-md m-2 text-white font-bold w-[100px] '>
        Submit Test
      </button>
      <InstructionModal openModal={openModal} setOpenModal={setOpenModal}/>
      <SumbitTestModal testModal={testModal} setTestModal={setTestModal}/>
      <div>
        Welcome Write you code here
      </div>
    </div>
  )
}

export default BrowserPage