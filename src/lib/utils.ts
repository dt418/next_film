import { type ClassValue, clsx } from "clsx";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function textTruncate(str: string, length = 160, ending = "...") {
  if (length == null) {
    length = 100;
  }

  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str?.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

const IS_SERVER = typeof window === "undefined";

/**
 *
 * @param path The relative path start with '/'
 * @example
 * getURL('/about')
 * @returns Full path with host name
 */
export function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_SITE_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}

export function stringToSlug(str: string) {
  return slugify(str, { locale: "vi", lower: true });
}
