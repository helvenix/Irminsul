'use client'

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Canvas(){
    const imgs = [
        '0019.jpg',
        '0031.jpg',
        '0032.jpg',
        '0034.jpg',
        '0038.png',
        '0044.jpg',
        '0049.jpg',
        '0053.jpg',
        '0054.jpg',
        '0067.png',
        '0090.jpg',
        '0091.png',
        '0094.png',
        '0095.jpg',
        '0096.png',
        '0102.jpg',
        '0114.png',
        '0119.png',
        '0163.jpg',
        '0194.png'
    ]

    return (
        <div className="w-screen h-[36%] overflow-hidden">
            <Carousel 
                className="w-[100%] h-[100%]" 
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {imgs.map((img, i) => (
                        <CarouselItem key={i} className="relative flex justify-center">
                            <img src={`private/${img}`} className="max-h-[36vh] object-cover"/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2"/>
            </Carousel>
        </div>
    )
}