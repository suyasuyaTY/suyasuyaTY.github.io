import type { ImageMetadata } from "astro";

export interface FriendLinkItem {
  title: string;
  url: string;
  description?: string;
  creator: string;
  image: ImageMetadata;
  darkImage?: ImageMetadata;
}

import UnitSIImg from "@assets/friends/UnitSI.png";
import TaYoshi from "@assets/friends/ta-yoshi02.png";

export const friends: FriendLinkItem[] = [
  {
    title: "シャーロットエースの部屋",
    url: "https://charlotteace.github.io/",
    description: "しのはら恵/国際単位系/シャーロットエースの活動記録。",
    creator: "しのはら恵/国際単位系/シャーロットエース",
    image: UnitSIImg,
  },
  {
    title: "Misc Box",
    url: "https://ta-yoshi02.github.io/",
    description: "おたく",
    creator: "t-yosi",
    image: TaYoshi,
  },
];
