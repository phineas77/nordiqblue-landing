import type { Metadata } from "next";
import HomeClient from "./home-client";
import { buildMetadata, siteConfig } from "../lib/site";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  canonical: "/",
});

export default function Page() {
  return <HomeClient />;
}
