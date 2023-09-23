"use client"
import React, { useState } from 'react'
import InstructionModal from '../components/browserPageComponents/instructionModal'
import { Button } from '@mui/material';
import SumbitTestModal from '../components/browserPageComponents/sumbitTestModal';

const BrowserPage = () => {
  const [openModal, setOpenModal] = useState(true);
  const [testModal, setTestModal] = useState(false)
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-2 border-b-2 border-gray-500'>

        <div className='flex justify-end'>

          <button onClick={() => setOpenModal(true)} className='bg-pink-700 p-2 text-sm rounded-md m-2 text-white font-bold w-[150px] '>
            Show Instructions
          </button>
          <button onClick={() => setTestModal(true)} className='bg-green-700 p-2 text-sm rounded-md m-2 text-white font-bold w-[100px]'>
            Submit Test
          </button>
        </div>
        <InstructionModal openModal={openModal} setOpenModal={setOpenModal} />
        <SumbitTestModal testModal={testModal} setTestModal={setTestModal} />
      </div>
      <div>
        Welcome Write you code here
      </div>
    </div>
  )
}

export default BrowserPage