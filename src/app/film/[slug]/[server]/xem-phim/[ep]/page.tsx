import { type Metadata, type ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  Clock,
  GalleryVerticalEnd,
  Globe,
  LibraryBig,
  Monitor,
  UsersRound,
} from "lucide-react";
import slugify from "slugify";

import { Button } from "@/components/ui/button";
import { getFilmBySlug } from "@/lib/fetcher";
import { type IMovieResponse } from "@/types/movie";

interface IFilmDetailParams {
  params: {
    slug: string | string[];
    server: string | string[];
    ep: string | string[];
  };
  searchParams: Record<string, string | string[] | undefined>;
}

type Props = {
  params: {
    slug: string | string[];
    server: string | string[];
    ep: string | string[];
  };
  searchParams: Record<string, string | string[] | undefined>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, server, ep } = params;
  console.log("params", params);
  // fetch data
  const film = await getFilmBySlug(slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const currentServer = film?.movie?.episodes?.filter(
    (sv) => slugify(sv?.server_name, { locale: "vi", lower: true }) === server
  );
  const currentEp = currentServer[0]?.items?.filter((e) => e?.slug === ep) || [];
  return {
    title: `Xem phim ${film?.movie?.name} - Tập ${currentEp[0]?.name}`,
    description: film?.movie?.description,
    openGraph: {
      images: [film?.movie?.thumb_url, ...previousImages],
    },
  };
}
export default async function FilmDetail({ params }: IFilmDetailParams) {
  const { slug, server, ep } = params;
  const res: IMovieResponse = await getFilmBySlug(slug);
  const { movie } = res;

  const currentServer = movie?.episodes?.filter(
    (sv) => slugify(sv?.server_name, { locale: "vi", lower: true }) === server
  );
  const currentEp = currentServer[0]?.items?.filter((e) => e?.slug === ep) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Image
          src={movie?.thumb_url}
          alt={movie?.name}
          width={400}
          height={600}
          className="w-full md:w-1/4 rounded-lg aspect-[2/3] object-cover"
        />
        <div className="detail flex flex-col w-full md:w-auto">
          <h1 className="text-lg font-bold">{movie?.name}</h1>
          <div className="flex flex-col">
            <div className="inline-flex text-sm font-light gap-2">
              <UsersRound className="w-4 h-4 flex-shrink-0" />
              Diễn viên: {movie?.casts || "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <GalleryVerticalEnd className="w-4 h-4 flex-shrink-0" />
              Số tập: {movie?.total_episodes || "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <Check className="w-4 h-4 flex-shrink-0" />
              Trạng thái: {movie?.current_episode || "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              Thời lượng: {movie?.time || "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <CalendarDays className="w-4 h-4 flex-shrink-0" /> Năm phát hành:{" "}
              {movie?.category[3]?.list?.map((item) => item?.name)?.join(", ") ||
                "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <Monitor className="w-4 h-4 flex-shrink-0" /> Chất lượng:{" "}
              {movie?.quality || "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <LibraryBig className="w-4 h-4 flex-shrink-0" />
              Thể loại:{" "}
              {movie.category[2]?.list?.map((item) => item.name).join(", ") ||
                "Đang cập nhật"}
            </div>
            <div className="inline-flex text-sm font-light gap-2">
              <Globe className="w-4 h-4 flex-shrink-0" /> Quốc gia:{" "}
              {movie.category[4]?.list.map((ct) => ct.name).join(", ") ||
                "Đang cập nhật"}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-auto gap-2 mt-4">
            <h2 className="text-lg font-semibold">Nội dung phim</h2>
            <div
              className="text-sm text-light"
              dangerouslySetInnerHTML={{ __html: movie?.description }}
            ></div>
          </div>
        </div>
      </div>
      <iframe
        src={currentEp[0]?.embed}
        width="100%"
        height="auto"
        allowFullScreen
        allow="autoplay; fullscreen"
        className="min-w-full min-h-auto md:min-h-[calc(100vh-100px)] aspect-video"
      />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex flex-col w-full">
          <h2 className="text-lg font-semibold">Xem phim</h2>
          <ul>
            {movie.episodes.map((ep) => (
              <li key={ep.server_name}>
                <p>{ep.server_name}</p>
                <ul className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-2 mt-2">
                  {ep.items.reverse().map((item) => (
                    <li key={item.slug}>
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          href={`/film/${movie.slug}/${slugify(ep.server_name, {
                            locale: "vi",
                            lower: true,
                          })}/xem-phim/${item.slug}`}
                        >
                          {item.name}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}