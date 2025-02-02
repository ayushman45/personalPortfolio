import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    company: "Tech Innovators Inc.",
    timeline: "2020 - Present",
    jobProfile: "Senior Software Engineer",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    company: "Data Dynamics Ltd.",
    timeline: "2018 - 2020",
    jobProfile: "Data Scientist",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600",
    company: "Creative Solutions Co.",
    timeline: "2015 - 2018",
    jobProfile: "UX Designer",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600",
    company: "Global Systems Corp.",
    timeline: "2012 - 2015",
    jobProfile: "Systems Analyst",
  },
]

export function CarouselSize() {
  return (
    (<Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl">
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1">
              <Card
                className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                <CardContent className="p-0 relative group">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.jobProfile}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 ease-in-out filter brightness-50 group-hover:brightness-75" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                      <p className="text-lg font-semibold mb-2">{item.jobProfile}</p>
                      <div
                        className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>)
  );
}

