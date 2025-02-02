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
    tech: "Next Js",
    yearsOfExperience: "1 year",
    description:
      "Next.js is a React framework that helps developers build web applications. It provides tools and features for building the front-end and back-end of web applications",
    image: "/frontend/nextjs.gif",
  },
  {
    id: 2,
    tech: "React",
    yearsOfExperience: "2 years",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently.",
    image: "/frontend/reactjs.gif",
  },
  {
    id: 3,
    tech: "JavaScript",
    yearsOfExperience: "3 years",
    description:
      "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, alongside HTML and CSS, and is used to create dynamic content on websites.",
    image: "/frontend/js.gif",
  },
  {
    id: 4,
    tech: "Material-UI (MUI)",
    yearsOfExperience: "1 year",
    description:
      "Material-UI (MUI) is a popular React UI framework that implements Google's Material Design. It provides a collection of pre-built components to help developers create visually appealing and responsive web applications.",
    image: "/frontend/mui.png",
  },
  {
    id: 5,
    tech: "shadcn",
    yearsOfExperience: "6 months",
    description:
      "shadcn is a modern UI library for building sleek and customizable user interfaces. It offers a set of components and utilities designed to streamline the development of responsive and accessible web applications.",
    image: "/frontend/shadcn.png",
  }
];
export default function Frontend() {
  return (
    <div className="min-w-[100vw] py-2 px-4 flex flex-col z-10">
      <h2 className="text-3xl my-3">Frontend Skills</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[100%] m-auto min-w-[1200px]"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 xl:basis-1/5">
              <div className="p-0">
                <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                  <CardContent className="p-0 relative group">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.tech}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 ease-in-out filter brightness-50 group-hover:brightness-75"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end px-2 text-white transition-all duration-300 ease-in-out group-hover:translate-y-[-2rem]">
                        <p className="text-xl font-bold mb-2 transition-all duration-300 ease-in-out group-hover:mb-2">
                          {item.tech}
                        </p>
                        <div className="space-y-2 hidden group-hover:block transition-all duration-300 ease-in-out">
                          <p className="text-sm font-medium">{item.yearsOfExperience}</p>
                          <p className="text-xs">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:hidden" />
        <CarouselNext className="right-2 md:hidden" />
      </Carousel>
    </div>
  );
}
