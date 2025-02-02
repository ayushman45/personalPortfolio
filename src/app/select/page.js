"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { Context } from "../ContextWrapper";
import { Loading } from "@/assets/Loading";

function Page() {
  const { profile, setProfile } = useContext(Context);

  const profiles = [
    {
      title: "Recruiter",
      url: "/profiles/recruiter.png",
    },
    {
      title: "Developer",
      url: "/profiles/developer.png",
    },
    {
      title: "Wanderer",
      url: "/profiles/wanderer.png",
    },
    {
      title: "Stalker",
      url: "/profiles/stalker.png",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center gap-16">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Who's Watching ?
          </h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 justify-around gap-8 items-center">
            {profiles.map((prof, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4"
                >
                  <img
                    src={prof.url}
                    alt="prof.title"
                    className="hover:border-white hover:border-4 rounded-[7px] w-24"
                    onClick={() => {
                      setProfile(prof.title.toLowerCase());
                      setLoading(true);
                    }}
                  />

                  <h4 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
                    {prof.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
