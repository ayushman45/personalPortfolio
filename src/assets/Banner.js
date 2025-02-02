"use client"

import React, { useContext } from 'react'
import Header from './Header'
import Introduction from './Introduction'
import { Context } from '@/app/ContextWrapper'

function Banner() {
    const {profile} = useContext(Context);
    
  return (
    <div className="pb-10" style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 2), transparent 35%), url('/gifs/${profile||"developer"}.gif')`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <Header />
            <Introduction />
    </div>
  )
}

export default Banner

//