import Image from 'next/image'
import React from 'react'
import profileName from '../../public/netflix.png'

function Name() {
  return (
    <div className="netflix">
        <Image src={profileName} alt='self-logo' width={200} height={50} title='Ayushman' />
    </div>
  )
}

export default Name