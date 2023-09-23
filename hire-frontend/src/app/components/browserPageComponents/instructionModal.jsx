import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const InstructionModal = ({openModal,setOpenModal}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outlineStyle:"none"
        
      };
  return (
<Modal
  open={openModal}
  onClose={()=>setOpenModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h4" component="h2">
      Read the instructions
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <ul style={{listStyle:"disc"}} className='font-semibold'>
            <li>left side is your coding section</li>
            <li>left side is your coding section</li>
            <li>left side is your coding section</li>
            <li>left side is your coding section</li>
        </ul>
    </Typography>
  </Box>
</Modal>
  )
}

export default InstructionModal