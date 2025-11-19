import { tv } from "tailwind-variants";

export const experienceCardStyle = tv({
  // slots: 1つのバリアントで制御したい複数のパーツ
  slots: {
    base: "group relative border-l px-8 pb-6 transition-all hover:bg-gray-50/50",
    dot: "absolute top-3 -left-1 h-2 w-2 rounded-full border duration-200 group-hover:scale-150",
    dateText: "text-xs font-light",
    titleText: "text-xl font-semibold text-black group-hover:underline",
  },
  // variants: 条件分岐の定義
  variants: {
    category: {
      職歴: {
        base: "border-blue-500",
        dot: "border-blue-500 bg-blue-500 group-hover:bg-white",
        dateText: "text-blue-500",
      },
      学歴: {
        base: "border-green-500",
        dot: "border-green-500 bg-green-500 group-hover:bg-white",
        dateText: "text-green-500",
      },
    },
  },
});
