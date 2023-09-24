import { Box, Modal, Tab, Typography } from '@mui/material'
import React from 'react'

const TabModal = ({setActiveTab,tabs,isTabModalOpen,setIsTabModalOpen}) => {
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
            open={isTabModalOpen}
            onClose={() => setIsTabModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                   Tabs 
                </Typography>
                <div className='flex flex-col gap-2'>
                    {tabs.map((tab,index)=>(
                        <div className='break-words' key={index} onClick={()=>{
                            setActiveTab(index)
                            setIsTabModalOpen(false)
                        }}>
                            {tab.history[tab.activeIndex]}
                        </div>
                    ))}

                </div>
            </Box>
        </Modal>
    )
}

export default TabModal