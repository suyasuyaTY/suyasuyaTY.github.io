// 記事本文 (Markdown) から文字数と読了時間を求める

// 日本語の文章を1分で読める文字数の目安
const charactersPerMinute = 500;

export type ReadingStats = {
  characters: number;
  minutes: number;
};

// 本文として読む部分だけを残す (コードブロック・URL・Markdown の記号は数えない)
const toPlainText = (markdown: string) =>
  markdown
    .replace(/^---[\s\S]*?\n---/, "") // frontmatter
    .replace(/```[\s\S]*?```/g, "") // コードブロック
    .replace(/<[^>]+>/g, "") // HTML タグ
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // 画像
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // リンクは表示テキストだけ残す
    .replace(/https?:\/\/\S+/g, "") // URL (リンクカード)
    .replace(/[#>*_~`|\-\s]/g, ""); // Markdown の記号と空白

export const getReadingStats = (markdown: string): ReadingStats => {
  const characters = [...toPlainText(markdown)].length;
  const minutes = Math.max(1, Math.ceil(characters / charactersPerMinute));
  return { characters, minutes };
};
