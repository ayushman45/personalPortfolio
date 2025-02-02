"use client"

import { Context } from '@/app/ContextWrapper'
import Image from 'next/image';
import React, { useContext } from 'react'

function Gif() {
    const {profile} = useContext(Context);
  return (
    <div className='w-full absolute top-0 left-0 z-0'>
        <img src={"/gifs/"+profile+".gif"} alt={profile} className='w-full image-banner' />
    </div>
  )
}

export default Gif