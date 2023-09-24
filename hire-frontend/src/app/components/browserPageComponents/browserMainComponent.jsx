"use client"
import React, { useEffect, useState } from 'react'
import SearchBar from "./searchBar";
import BrowserPane from "./browserPane";
import TabModal from './tabModal';


const proxiedUrl = (url) => {
    return `https://proxy.hiring.blockdudes.com/?mortyurl=${encodeURIComponent(url)}`;
};


const BrowserMainComponent = () => {
    
    const [tabs, setTabs]=useState([{
        history:[proxiedUrl(("https://google.com"))],
        activeIndex:0,
    }])

  const [activeTab, setActiveTab] = useState(0);
  const [isTabModalOpen, setIsTabModalOpen] = useState(false);

    
  const handleSearch = (query)=>{

    const newUrl= proxiedUrl(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`
    )

    const newTabs =[...tabs];
    newTabs[activeTab].history.push(newUrl);
    newTabs[activeTab].activeIndex=newTabs[activeTab].activeIndex + 1;
    setTabs(newTabs);
  };


  const handleBack = () => {
    const newTabs = [...tabs];
    if (newTabs[activeTab]?.activeIndex > 0) {
      newTabs[activeTab].activeIndex=newTabs[activeTab].activeIndex - 1 ;
      setTabs(newTabs);
    }
  };

  const handleForward = () => {
    const newTabs = [...tabs];
    if (
      newTabs[activeTab]?.activeIndex <
      newTabs[activeTab]?.history.length - 1
    ) {
      newTabs[activeTab].activeIndex=newTabs[activeTab].activeIndex + 1;
      setTabs(newTabs);
    }
  };


  const handleGlobalClick=(event)=>{
    if((event.ctrlKey || event.metaKey || event.buton ===  1) && event.target){
        event.preventDefault();
        const newTabs = [...tabs];
        newTabs.push({
            history: [e.target.href],
            activeIndex: 0,
        });
        console.log('clicked happened')
        setTabs(newTabs);
        setActiveTab(newTabs.length - 1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [tabs]);


  return (
    <div className='flex flex-col w-full h-full bg-white p-4'>
        <div className='flex w-full gap-4 mb-3'>
          {/* search bar */}
          <SearchBar onSearch={handleSearch}/>
          {/* tabs */}
          <div className='flex cursor-pointer flex-col text-sm font-bold justify-center w-[80px] p-2 rounded-lg bg-blue-300 ' onChange={(index) => setActiveTab(index)} onClick={()=>setIsTabModalOpen(true)}>
            {
              tabs.map((_,index)=>(
                <div className='text-sm text-center' key={index}>
                  Tab {index + 1}
                </div>
              ))
            }
          </div>
        </div>
        
        {/* browserPlane */}
        <BrowserPane url={tabs[activeTab].history[tabs[activeTab].activeIndex]}/>

        {/* Modal */}
        <TabModal tabs={tabs} setActiveTab={setActiveTab} isTabModalOpen={isTabModalOpen} setIsTabModalOpen={setIsTabModalOpen}/>
    </div>
  );
}

export default BrowserMainComponent