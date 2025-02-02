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
    tech: "AWS",
    yearsOfExperience: "2 years",
    description:
      "",
      image: '/devops/aws.png'
  },
  {
    id: 2,
    tech: "Vercel",
    yearsOfExperience: "1 year",
    description:
      "",
      image: '/devops/vercel.png'
  },
  {
    id: 3,
    tech: "Git & Github",
    yearsOfExperience: "3 years",
    description:
      "",
      image: '/devops/git.png'
  },
  {
    id: 4,
    tech: "Heroku",
    yearsOfExperience: "1 years",
    description:
      "",
      image: '/devops/heroku.png'
  },
];
export default function Devops() {
  return (
    <div className="max-w-[100vw] py-2 px-4 flex flex-col z-10 overflow-x-scroll">
      <h2 className="text-3xl my-3">DevOps and Tools</h2>
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
                          <p className="text-sm font-medium">Years of Experience : {item.yearsOfExperience}</p>
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
