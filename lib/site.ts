import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://www.nordiqblue.com";

function withProtocol(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function normalizeSiteUrl(value: string) {
  return withProtocol(value.trim()).replace(/\/$/, "");
}

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return normalizeSiteUrl(explicit);

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) return normalizeSiteUrl(productionHost);

  const branchHost = process.env.VERCEL_BRANCH_URL?.trim();
  if (process.env.VERCEL_ENV === "preview" && branchHost) {
    return normalizeSiteUrl(branchHost);
  }

  const deploymentHost = process.env.VERCEL_URL?.trim();
  if (deploymentHost) return normalizeSiteUrl(deploymentHost);

  return DEFAULT_SITE_URL;
}

export const siteUrl = resolveSiteUrl();
export const isIndexableDeployment =
  process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export const siteConfig = {
  siteName: "NordiQ Blue AB",
  siteTitle: "NordiQ Blue | Blue Economy Innovation Infrastructure",
  siteDescription:
    "Commercial IP and innovation infrastructure powering scalable blue economy ventures across Europe.",
  siteLocale: "en_US",
  logoPath: "/nordiqblue-logo-cropped.png",
  ogImagePath: "/opengraph-image",
  twitterImagePath: "/twitter-image",
  publishedAt: "2026-03-16T00:00:00.000Z",
  themeColor: "#000739",
  socialAlt: "NordiQ Blue — Professional infrastructure for the Blue Economy",
} as const;

export const logoUrl = `${siteUrl}${siteConfig.logoPath}`;

type MetadataInput = {
  title?: string;
  description?: string;
  canonical?: string;
};

export function buildMetadata({
  title = siteConfig.siteTitle,
  description = siteConfig.siteDescription,
  canonical = "/",
}: MetadataInput = {}): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteConfig.siteName,
    title,
    description,
    referrer: "origin-when-cross-origin",
    keywords: [
      "NordiQ Blue",
      "NordiQ Blue AB",
      "blue economy",
      "ocean innovation",
      "ocean startups",
      "marine innovation",
      "innovation infrastructure",
      "accelerator framework",
      "European ecosystem",
      "commercial IP",
      "licensing agreements",
      "gateway model",
      "Stockholm",
      "Sweden",
    ],
    authors: [{ name: siteConfig.siteName }],
    creator: siteConfig.siteName,
    publisher: siteConfig.siteName,
    category: "business",
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.siteLocale,
      url: siteUrl,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImagePath,
          width: 1200,
          height: 630,
          alt: siteConfig.socialAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.twitterImagePath],
    },
    robots: {
      index: isIndexableDeployment,
      follow: isIndexableDeployment,
      nocache: !isIndexableDeployment,
      googleBot: {
        index: isIndexableDeployment,
        follow: isIndexableDeployment,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
      shortcut: ["/favicon.ico"],
      apple: [{ url: "/favicon.ico" }],
    },
    other: {
      "apple-mobile-web-app-capable": "yes",
      "mobile-web-app-capable": "yes",
    },
  };
}
