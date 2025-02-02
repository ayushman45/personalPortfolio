"use client"

import React, { useState } from 'react';
import { createContext } from "react";

export const Context = createContext();

function ContextWrapper({children}) {
    const [profile,setProfile] = useState('wanderer')
  return (
    <Context value={{profile,setProfile}}>
        {children}
    </Context>
  )
}

export default ContextWrapper