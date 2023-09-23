import React, { useState, useEffect } from 'react';

const ALLOWED_DOMAINS = ["google.com", "example.com", "alloweddomain.com"];

const checkDomain = (url) => {
    let allowed = true;
    try {
      const domain = new URL(url).hostname;
      const domainParts = domain.split('.');
      const mainDomain = domainParts.slice(-2).join('.');
      allowed = ALLOWED_DOMAINS.includes(mainDomain);
    } catch (e) {
      console.error("Error parsing URL:", e);
    }
    return allowed;
  };

const BrowserPane = ({url}) => {
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    // setIsAllowed(checkDomain(url));
  }, [url]);

  const handleIframeLoad = () => {
    console.log("frame loaddddddd")
    window.addEventListener('message', handleMessage, false);
  };


  const handleMessage = (event) => {

    console.log(event.origin)
    const clickedUrl = event.data;
    console.log("Received URL:", clickedUrl);
    // setIsAllowed(checkDomain(clickedUrl));
    };

    if (isAllowed) {
        return (
          <div className='flex w-full h-[100vh]'>
            <iframe src={url} id='iframe' onLoad={handleIframeLoad} width="100%" height="100%"></iframe>
          </div>
        );
      } else {
        return (
          <div className='flex w-full items-center justify-center'>
            <p className='text-xl text-red-500'>This domain is blocked!</p>
          </div>
        );
      }
}

export default BrowserPane