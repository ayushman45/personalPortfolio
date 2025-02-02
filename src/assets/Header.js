"use client"

import React, { useEffect, useState } from 'react'
import Navigations from './Navigations'
import Name from './Name'
import AvatarComponent from './AvatarComponent'
import { useMediaQuery } from 'react-responsive'

function Header() {
    const isMobile = useMediaQuery({maxWidth:768});
    const [offset,setOffset] = useState(0);

  useEffect(()=>{
    window.onscroll = () => {
      let headElem = document.querySelector('#head-element');
      const temp = -1*(headElem?.getBoundingClientRect()?.top);
      setOffset(temp);

    }

  },[]);

  return (
    <div className={`flex flex-row justify-between items-center w-full h-max py-4 px-4 z-10 mb-64 bg-black bg-opacity-${offset<=0?0:100}`} id='head-element'>
        <div className="flex flex-row justify-start items-center gap-3">
          {
            isMobile && <Navigations />
          }
          <Name />

          {
            !isMobile && <Navigations />
          }
        </div> 
        <div>
          <AvatarComponent />
        </div>    
      </div>
  )
}

export default Header