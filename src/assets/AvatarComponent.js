"use client";

import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Context } from "@/app/ContextWrapper";
import { useRouter } from "next/navigation";

function AvatarComponent() {
  const { profile } = useContext(Context);
  const navigate = useRouter();
  return (
    <Avatar
      className="cursor-pointer"
      onClick={(e) => navigate.push("/select")}
    >
      <AvatarImage src={"/profiles/"+profile+".png"} />
      <AvatarFallback>
        {profile.slice(0, 1).toUpperCase() || "W"}
      </AvatarFallback>
    </Avatar>
  );
}

export default AvatarComponent;
