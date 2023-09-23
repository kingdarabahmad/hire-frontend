import React, { useState } from 'react'

const RightSideBar = ({setSizes}) => {
  const [secondClick,setSecondClick]=useState(false)

  const handleSidebar=()=>{
    if(secondClick===false){
      setSizes([300,1,15])
      setSecondClick(true)
    }
    if(secondClick===true){
      setSizes([300,200,25])
      setSecondClick(false)
    }
  }
  return (
    <div className='w-[60px] fixed right-0'>
      <img onClick={()=>handleSidebar()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/480px-Google_Chrome_icon_%28February_2022%29.svg.png"  alt="google-chrome" className='p-1 absolute top-3 w-[50px] h-[50px] right-0 cursor-pointer' />
    </div>
  )
}

export default RightSideBar