"use client";

import React, { Fragment } from "react";
import Autoplay from "embla-carousel-autoplay";

import { useMediaQuery } from "@/hooks/use-media";
import { IMovieBase } from "@/types/movie-list";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

import { FilmCard } from "./film.card";

type TFilmCarouselProps = {
  items: IMovieBase[] | [];
  title?: string;
};
export function FilmCarousel({ items = [], title }: TFilmCarouselProps) {
  const isAllMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Fragment>
      {title ? (
        <h2 className="text-md font-medium uppercase pl-2 border-l-[3px] border-solid border-primary text-primary text-gradient-to-t text-gradient">
          {title}
        </h2>
      ) : null}
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={isAllMobile ? [] : [Autoplay({ delay: 1500 })]}
      >
        <CarouselContent className="-ml-1">
          {items?.map((filmItem) => (
            <CarouselItem
              key={filmItem.slug}
              className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/6"
            >
              <div className="p-1">
                <FilmCard {...filmItem} key={filmItem.slug} isPriority />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Fragment>
  );
}
