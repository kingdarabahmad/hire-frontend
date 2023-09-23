import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import Link from 'next/link';

const SumbitTestModal = ({testModal,setTestModal}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outlineStyle:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"8px"
        
      };
    return (
        <Modal
            open={testModal}
            onClose={()=>setTestModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h7" component="h2">
                    Are you sure you want submit the test ?
                </Typography>
                <Link href="/completepage">
                    <Button className='bg-blue-700 border-none outline-none text-white' variant='contained' >Confirm and Submit</Button>
                </Link>
            </Box>
        </Modal>
    )
}

export default SumbitTestModal