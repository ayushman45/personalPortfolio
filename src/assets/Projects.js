"use client"

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
    id: 1,
    tech: "Swalekh Pad",
    company: "Reverie Language Technologies",
    image: "/placeholder/project1.svg",
    link: "https://swalekh.reverieinc.com"
  },
  {
    id: 2,
    tech: "Swalekh Web Extension",
    company: "Reverie Language Technologies",
    image: "/placeholder/project2.png",
    link: "https://chromewebstore.google.com/detail/swalekh-multilingual-typi/emdhmomkapfjdfhihjhaagplmcigfkgi"
  },
  {
    id: 3,
    tech: "Inventory Management App",
    company: "Freelance Client",
    image:'/placeholder/project3.png',
    link: "https://github.com/ayushman45/inventory_management",
  },
  {
    id: 4,
    tech: "Transliteration SDK",
    company: "Reverie Language Technologies",
    image:'/placeholder/project4.png',
    link: "https://swalekh.reverieinc.com/developers",
  }
];
export default function Projects() {
  return (
    <div className="max-w-[100vw] py-2 px-4 flex flex-col z-10 overflow-x-scroll">
      <h2 className="text-3xl my-3">Projects</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[100%] m-auto min-w-[1200px] relative"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="basis-1/5 md:1/4 xl:basis-1/4">
              <div className="p-0">
                <Card className={`overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 ${item.id<3?"bg-white text-black":"bg-black text-white"}`}>
                  <CardContent className="p-0 relative group">
                    <div className="relative aspect-[3/2] overflow-hidden" onClick={()=>window.open(item.link,'_blank')}>
                      <Image
                        src={item.image}
                        alt={item.tech}
                        layout="fill"
                        objectFit="contain"
                        className="transition-all duration-300 ease-in-out filter brightness-50 group-hover:brightness-75"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end px-2 transition-all duration-300 ease-in-out group-hover:translate-y-[-2rem]">
                        <p className="text-xl font-bold mb-2 transition-all duration-300 ease-in-out group-hover:mb-2">
                          {item.tech}
                        </p>
                        <div className="space-y-2 hidden group-hover:block transition-all duration-300 ease-in-out">
                          <p className="text-sm font-medium">Years of Experience : {item.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 2xl:hidden" />
      <CarouselNext className="right-2 2xl:hidden" />
      </Carousel>
    </div>
  );
}
