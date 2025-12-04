import type { ImageMetadata } from "astro";

export interface LinkItem {
  title: string;
  url: string;
  description: string;
  image: ImageMetadata;
  darkImage?: ImageMetadata;
}

import githubImg from "@assets/logos/github.png"; // または @assets/images/...
import githubWhiteImg from "@assets/logos/github-white.png";
import xImg from "@assets/logos/x.png";
import xWhiteImg from "@assets/logos/x-white.png";
import zennImg from "@assets/logos/zenn.png";
import atcoderImg from "@assets/logos/atcoder.png";
import atcoderWhiteImg from "@assets/logos/atcoder-white.png";
import astroImg from "@assets/logos/astro.png";
import astroWhiteImg from "@assets/logos/astro-white.png";
import tailwindImg from "@assets/logos/tailwind.png";

export const socials: LinkItem[] = [
  {
    title: "GitHub",
    url: "https://github.com/suyasuyaTY",
    description: "@suyasuyaTY",
    image: githubImg,
    darkImage: githubWhiteImg,
  },
  {
    title: "X (Twitter)",
    url: "https://twitter.com/suyasuyaTY",
    description: "@suyasuyaTY",
    image: xImg,
    darkImage: xWhiteImg,
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/suyasuyaty",
    description: "技術記事の発信",
    image: zennImg,
  },
  {
    title: "AtCoder",
    url: "https://atcoder.jp/users/suyasuyaTY",
    description: "競技プログラミングのプロフィール",
    image: atcoderImg,
    darkImage: atcoderWhiteImg,
  },
];

export const friends: LinkItem[] = [
  // {
  //   title: "友人のブログ",
  //   url: "https://friend-blog.example.com",
  //   description: "大学の友人の技術ブログ。",
  //   image: "https://friend-blog.example.com/logo.png",
  // },
];

export const thanks: LinkItem[] = [
  {
    title: "Astro",
    url: "https://astro.build",
    description: "このサイトの構築に使用しているフレームワーク。",
    image: astroImg,
    darkImage: astroWhiteImg,
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "スタイリングに使用。",
    image: tailwindImg,
  },
];
