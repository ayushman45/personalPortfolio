"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
  const navigate = useRouter();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate.push("/select");
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="container"
      className="bg-black w-[100vw] h-[100vh] flex flex-row justify-center items-center"
    >
      {/* <video autoPlay loop className="">
      <source src="/introvideo.mp4" type="video/mp4" />
      </video> */}

      <video
        src="/introvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        id="zoomElement"
        className="w-[70vw] zoomed"
      ></video>
    </div>
  );
}

export default Page;
