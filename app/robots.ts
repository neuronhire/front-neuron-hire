import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.neuronhire.com";

const disallowedPaths = [
  "/api/",
  "/dashboard/",
  "/admin/",
  "/auth/",
  "/payment/",
  "/user/",
  "/profile/",
  "/webhook/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
