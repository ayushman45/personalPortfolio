"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Footer() {
  const socials = [
    {
      id: 1,
      title: "Linkedin",
      url: "https://linkedin.com/in/ayushman45",
      image: "/socials/linkedin.png",
    },
    {
      id: 2,
      title: "Github",
      url: "https://github.com/ayushman45",
      image: "/socials/github.png",
    },
    {
      id: 3,
      title: "Email",
      url: "mailto:ayushman.manishankar@gmail.com",
      image: "/socials/email.png",
    },
    {
      id: 4,
      title: "Medium",
      url: "https://medium.com/@ayushman45",
      image: "/socials/medium.png",
    },
    {
      id: 5,
      title: "Instagram",
      url: "https://instagram.com/ayushman_cc",
      image: "/socials/instagram.png",
    },
  ];
  return (
    <div className={`w-[100vw] py-32 px-10 flex flex-row flex-wrap justify-center items-center gap-16 mt-12 bg-slate-900`}>
      {socials.map((soc, index) => {
        return (
          <div key={index} onClick={(e)=>window.open(soc.url,'_blank')}>
            <Avatar className="hover:scale-125 rounded-lg">
              <AvatarImage src={soc.image} alt={soc.title} />
              <AvatarFallback>{soc.title.slice(0, 1)}</AvatarFallback>
            </Avatar>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
