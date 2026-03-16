import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "NordiQ Blue AB",
    short_name: "NordiQ Blue",
    description:
      "Commercial IP and innovation infrastructure powering scalable blue economy ventures across Europe.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000739",
    theme_color: "#000739",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
