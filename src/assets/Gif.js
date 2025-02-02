"use client"

import { Context } from '@/app/ContextWrapper'
import Image from 'next/image';
import React, { useContext } from 'react'

function Gif() {
    const {profile} = useContext(Context);
  return (
    <div className='h-[70vh] absolute top-0 left-0 z-0 flex flex-row justify-center items-center'>
        <img src={"/gifs/"+profile+".gif"} alt={profile} className='min-h-full min-w-[100vw] image-banner' />
    </div>
  )
}

export default Gif