import { tv } from "tailwind-variants";

export const experienceCardStyle = tv({
  // slots: 1つのバリアントで制御したい複数のパーツ
  slots: {
    base: "group relative border-l px-8 pb-6 transition-all",
    dot: "absolute top-3 -left-1 h-2 w-2 rounded-full border duration-300 group-hover:scale-200",
    dateText: "text-xs font-light",
    titleText: "text-xl font-semibold text-black group-hover:underline",
  },
  // variants: 条件分岐の定義
  variants: {
    category: {
      職歴: {
        // 定義した Work カラーを使用
        base: "border-(--color-work)",
        dot: "border-(--color-work) bg-(--color-work) group-hover:bg-white dark:group-hover:bg-(--color-work)",
        dateText: "text-(--color-work)",
        titleText:
          "text-(--color-text-heading) group-hover:text-(--color-work)",
      },
      学歴: {
        // 定義した Education カラーを使用
        base: "border-(--color-education)",
        dot: "border-(--color-education) bg-(--color-education) group-hover:bg-white dark:group-hover:bg-(--color-education)",
        dateText: "text-(--color-education)",
        titleText:
          "text-(--color-text-heading) group-hover:text-(--color-education)",
      },
    },
  },
});
