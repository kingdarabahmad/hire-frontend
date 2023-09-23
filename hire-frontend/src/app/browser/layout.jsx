"use client"
import React, { useState } from 'react'
import BrowserMainComponent from '../components/browserPageComponents/browserMainComponent'
import RightSideBar from '../components/browserPageComponents/rightSideBar'
import SplitPane from 'split-pane-react/esm/SplitPane'
import { Pane } from 'split-pane-react'
import 'split-pane-react/esm/themes/default.css';


const BrowserLayout = ({children}) => {
    const [sizes, setSizes] = useState([300, 190, 25]);
    const layoutCSS = {
	    height: '100%',
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	};
  return (

    <div style={{ height: "100vh" }} className='bg-gray-200'>
            <SplitPane
                sizes={sizes}
                onChange={(sizes) => setSizes(sizes)}
                
            >
                <div className='h-full'>
                    {children}
                </div>
                <div className='h-full' >
                    <BrowserMainComponent/>
                </div>
                <div className='h-full'>
                    <RightSideBar setSizes={setSizes}/>
                </div>
            </SplitPane>
        </div>

    
    
  )
}

export default BrowserLayout