import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { loadDefaultJapaneseParser } from "budoux";

// 記事ごとの OGP 画像 (1200x630) をビルド時に生成する
// デザイン: 外側の縁を青〜藍のグラデーションにし、その中に白いカードを置く (Zenn 風)

const width = 1200;
const height = 630;
// グラデーションの縁の太さ
const frame = 36;
// カード内の余白 (satori の width / height は余白を含まないので、カードの大きさから引く)
const paddingX = 64;
const paddingY = 56;
const author = "@suyasuyaTY";

const fontPath = resolve("src/assets/fonts/NotoSansJP-Bold.otf");
const avatarPath = resolve("src/images/Profile.png");

const parser = loadDefaultJapaneseParser();

export const getStaticPaths = (async () => {
  const allBlogPosts = await getCollection("blog");
  return allBlogPosts
    .filter((post) => (import.meta.env.PROD ? post.data.draft !== true : true))
    .map((post) => ({
      params: { slug: post.id },
      props: { title: post.data.title },
    }));
}) satisfies GetStaticPaths;

type Node = {
  type: string;
  props: { style?: Record<string, unknown>; children?: unknown; src?: string };
};

const h = (
  type: string,
  style: Record<string, unknown>,
  children?: unknown,
): Node => ({ type, props: { style, children } });

// タイトルは文節ごとに区切り、文節の途中で改行されないようにする
const titleNode = (title: string) =>
  h(
    "div",
    {
      display: "flex",
      flexWrap: "wrap",
      fontSize: title.length > 36 ? 52 : 60,
      lineHeight: 1.4,
      color: "#111827",
    },
    parser.parse(title).map((phrase) => h("span", {}, phrase)),
  );

const authorNode = (avatar: string) =>
  h("div", { display: "flex", alignItems: "center", gap: 24 }, [
    {
      type: "img",
      props: {
        src: avatar,
        style: { width: 88, height: 88, borderRadius: 9999 },
      },
    },
    h("div", { display: "flex", alignItems: "baseline", gap: 12 }, [
      h("span", { fontSize: 30, color: "#6b7280" }, "by"),
      h("span", { fontSize: 36, color: "#111827" }, author),
    ]),
  ]);

export const GET: APIRoute = async ({ props }) => {
  const [font, avatarBuffer] = await Promise.all([
    readFile(fontPath),
    readFile(avatarPath),
  ]);
  const avatar = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

  const tree = h(
    "div",
    {
      width,
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #6366f1 100%)",
      fontFamily: "Noto Sans JP",
    },
    h(
      "div",
      {
        width: width - frame * 2 - paddingX * 2,
        height: height - frame * 2 - paddingY * 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: 24,
        backgroundColor: "#ffffff",
      },
      [titleNode(props.title), authorNode(avatar)],
    ),
  );

  // satori は React 要素と同じ形のオブジェクトを受け取る
  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width,
    height,
    fonts: [{ name: "Noto Sans JP", data: font, weight: 700, style: "normal" }],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: width } })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
