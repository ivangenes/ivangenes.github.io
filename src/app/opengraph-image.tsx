import { ImageResponse } from "next/og";

import { SocialPreview } from "@/presentation/social-preview";

export const alt = "Ivan Genes — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialPreview />, size);
}
