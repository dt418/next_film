"use client";

import React from "react";
import { motion } from "framer-motion";

import { IMovieBase } from "@/types/movie-list";

import { FilmCard } from "./film.card";

interface IFilmListProps {
  items: IMovieBase[];
}
export function FilmList({ items }: IFilmListProps) {
  return (
    <ul className="w-full grid grid-cols-2 gap-x-3 md:gap-x-4 gap-y-4 sm:md:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      {items?.map((filmItem: IMovieBase, index: number) => {
        return (
          <motion.li
            key={filmItem.slug}
            className="w-full"
            initial={{
              opacity: 0,
              translateY: 50,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <FilmCard {...filmItem} />
          </motion.li>
        );
      })}
    </ul>
  );
}
