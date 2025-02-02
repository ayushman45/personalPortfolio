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
    tech: "Express Js",
    yearsOfExperience: "2 years",
    description:
      "Express.js is a lightweight Node.js framework for building web applications and APIs. It simplifies server-side development with easy routing, middleware support, and efficient handling of HTTP requests.",
    image: "/backend/express.png",
  },
  {
    id: 2,
    tech: "Node.js",
    yearsOfExperience: "2 years",
    description:
      "Node.js is a runtime environment that allows developers to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and is widely used for building scalable and high-performance backend applications.",
    image: "/backend/nodejs.png",
  },
  {
    id: 3,
    tech: "Java",
    yearsOfExperience: "3 years",
    description:
      "Java is a versatile, object-oriented programming language commonly used for building enterprise-level applications, Android apps, and large-scale systems. It is known for its platform independence and robustness.",
    image: "/backend/java.gif",
  },
  {
    id: 4,
    tech: "Python",
    yearsOfExperience: "2 years",
    description:
      "Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for web development, data analysis, artificial intelligence, scientific computing, and automation.",
    image: "/backend/python.gif",
  },
];

export default function Backend() {
  return (
    <div className="max-w-[100vw] py-2 px-4 flex flex-col z-10 overflow-x-scroll">
      <h2 className="text-3xl my-3">Backend Skills</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[100%] m-auto min-w-[1200px] relative"
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/5 md:1/4 xl:basis-1/4"
            >
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
                          <p className="text-sm font-medium">
                            Years of Experience : {item.yearsOfExperience}
                          </p>
                          {/* <p className="text-xs">{item.description}</p> */}
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
