import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
    {
        id:1,
        jobProfile: "Software Engineer",
        timeline: "June 2024 - Present",
        company: "Reverie Language Technologies",
        image: "/professional/reverie.gif"

    },
    {
        id:2,
        jobProfile: "Product Engineering Intern",
        timeline: "September 2023 - May 2024",
        company: "Reverie Language Technologies",
        image: "/professional/intern.gif"

    },
    {
        id:3,
        jobProfile: "Cyber Security Intern",
        timeline: "March 2023 - May 2023",
        company: "IBM",
        image: "/professional/cybersecurity.gif"

    },
    {
        id:4,
        jobProfile: "Co-Founder",
        timeline: "October 2021 - December 2022",
        company: "Vibee Media",
        image: "/professional/vibee.gif"

    },
    {
        id:5,
        jobProfile: "Hustler",
        timeline: "From the very Beginning",
        company: "...",
        image: "/professional/hustler.gif"

    },
]
export default function Skills() {
  return (
    <div className="min-w-[100vw] p-4 flex flex-col justify-center z-10">
        <h2 className="text-3xl my-4">Frontend Skills</h2>
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-[100%] m-auto min-w-[1200px]"
    >
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/3 xl:basis-1/5"
          >
            <div className="p-0">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                <CardContent className="p-0 relative group">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.jobProfile}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 ease-in-out filter brightness-50 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end px-2 text-white transition-all duration-300 ease-in-out group-hover:translate-y-[-2rem]">
                      <p className="text-xl font-bold mb-[-10px] transition-all duration-300 ease-in-out group-hover:mb-0">
                        {item.jobProfile}
                      </p>
                      <div className="space-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-sm font-medium">{item.company}</p>
                        <p className="text-xs">{item.timeline}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
    </div>
  );
}
