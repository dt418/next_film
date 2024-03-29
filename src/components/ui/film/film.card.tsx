import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "lucide-react";

import { IMovieBase } from "@/types/movie-list";

import { Card, CardContent } from "../card";

export const FilmCard = (props: IMovieBase) => {
  const { name, slug, thumb_url, original_name } = props;
  const filmLink = `/phim/${slug}`;
  return (
    <Link className="font-semibold" href={filmLink} title={name}>
      <Card className="w-full max-w-sm rounded-lg border shadow-sm">
        <div className="relative group overflow-hidden aspect-[2/3] rounded-t-lg">
          <Image
            className="object-cover rounded-t-lg transition-all scale-100 group-hover:scale-105"
            alt={name || original_name}
            width={300}
            height={450}
            style={{
              aspectRatio: "2/3",
              objectFit: "cover",
            }}
            src={thumb_url}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayIcon className="w-16 h-16 scale-50 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 bg-accent bg-opacity-50 rounded-full p-4 text-primary" />
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-[15px] font-medium capitalize pt-1 block truncate line-clamp-1">{name}</h3>
          <p className="text-sm truncate line-clamp-1 font-normal">
            {original_name}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
