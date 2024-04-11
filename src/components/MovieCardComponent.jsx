import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAllMovieService } from "@/service/product.service";

const MovieCardComponent = async ({ d }) => {
  // console.log("data in movie component 2: ", data);
  const data = await getAllMovieService(d);
  return (
    <main>
      {/* all movie */}
      <section className="all-movie w-screen">
        <Carousel className="w-full">
          <CarouselContent className="">
            {data.payload.map((item) => (
              <CarouselItem
                key={item.movie_id}
                className="md:basis-1/2 lg:basis-1/5"
              >
                <Link href={`/view-more-details/${item.movie_id}`}>
                  <div className="bg-white h-[390px] grid grid-rows-12 rounded-lg shadow-lg overflow-hidden max-w-lg w-full pt-6 pl-6 pr-6">
                    <div className="row-span-6 rounded-lg overflow-hidden">
                      <img
                        src={`${
                          item.image
                            ? item.image
                            : `https://i.pinimg.com/564x/1e/6a/02/1e6a022bd5e190fe5bf1e87904411a7e.jpg`
                        }`}
                        alt="Mountain"
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="row-span-6 pt-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-1">
                        {item.movie_title}
                      </h2>
                      <p className="text-gray-700 leading-tight line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
};

export default MovieCardComponent;
