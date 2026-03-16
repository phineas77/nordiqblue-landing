import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NordiQ Blue AB",
    short_name: "NordiQ Blue",
    description:
      "Commercial IP and innovation infrastructure powering scalable blue economy ventures across Europe.",
    start_url: "/",
    display: "standalone",
    background_color: "#000739",
    theme_color: "#000739",
    lang: "en",
  };
}
