"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

export function Loading() {
  const navigate = useRouter();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
        if(progress === 100){
            return () => clearInterval(timer);
        }
        setProgress((prev) => prev + 50), 400
    });

    return () => clearInterval(timer);

  }, []);

  React.useEffect(() => {
    if (progress === 100) {
      navigate.push("/home");
    }
  }, [progress]);

  return (
    // <div className="min-w-screen min-h-screen ">
      <Progress value={progress} className="w-[60%]" />
    // </div>
  );
}
