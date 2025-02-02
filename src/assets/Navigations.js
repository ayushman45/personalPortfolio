"use client"

import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
  

function Navigations() {
    const [items,setItems] = useState([
        { "title": "Home", "link": "/home" },
        // { "title": "Professional", "link": "/professional" },
        // { "title": "Skills", "link": "/skills" },
        // { "title": "Projects", "link": "/projects" },
        {"title": "Resume", "link":"/resume"},
        { "title": "Contact", "link": "/contact" }
      ]
    )      
  return (
    <NavigationMenu>
  <NavigationMenuList>
    {
        items && items.map((item,index)=>{
            return(
                <NavigationMenuItem key={index}>
          <Link href={item.link} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {item.title}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
            )
        })
    }
  </NavigationMenuList>
</NavigationMenu>

  )
}

export default Navigations