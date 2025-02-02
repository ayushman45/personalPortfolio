"use client"

import { useState } from "react"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

function Navigations() {
  const [items] = useState([
    { title: "Home", link: "/home" },
    { title: "Resume", link: "/resume",redirect: true },
    // { title: "Contact", link: "/contact" },
  ])

  const DownloadCV = () => {
    const fileUrl = "/Ayushman Manishankar - Reverie Inc.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Ayushman Manishankar CV.pdf";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }

  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      {isMobile ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="ml-4">
            {items.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                {
                  item.redirect?<p onClick={DownloadCV}>{item.title}</p>:<Link href={item.link}>{item.title}</Link>
                }
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            {items.map((item, index) => (
              <NavigationMenuItem key={index}>
                {
                  item.redirect?<p onClick={DownloadCV}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink></p>:
                  <Link href={item.link} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                  </Link>
                }
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </>
  )
}

export default Navigations

