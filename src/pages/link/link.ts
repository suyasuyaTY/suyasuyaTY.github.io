export interface LinkItem {
  title: string;
  url: string;
  description: string;
  image: string;
}

export const socials: LinkItem[] = [
  {
    title: "GitHub",
    url: "https://github.com/suyasuyaTY",
    description: "@suyasuyaTY",
    image: "/src/images/logos/github.png",
  },
  {
    title: "X (Twitter)",
    url: "https://twitter.com/suyasuyaTY",
    description: "@suyasuyaTY",
    image: "/src/images/logos/x.png",
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/suyasuyaTY",
    description: "技術記事の発信",
    image: "/src/images/logos/zenn.png",
  },
  {
    title: "AtCoder",
    url: "https://atcoder.jp/users/suyasuyaTY",
    description: "競技プログラミングのプロフィール",
    image: "/src/images/logos/atcoder.png",
  },
];

export const friends: LinkItem[] = [
  {
    title: "友人のブログ",
    url: "https://friend-blog.example.com",
    description: "大学の友人の技術ブログ。",
    image: "https://friend-blog.example.com/logo.png",
  },
];

export const thanks: LinkItem[] = [
  {
    title: "Astro",
    url: "https://astro.build",
    description: "このサイトの構築に使用しているフレームワーク。",
    image: "https://astro.build/assets/press/astro-icon-dark.svg",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "スタイリングに使用。",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];
