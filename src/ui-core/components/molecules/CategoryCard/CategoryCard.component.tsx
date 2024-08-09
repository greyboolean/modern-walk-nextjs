import Link from "next/link";
import { toTitleCase } from "../../../../utils/utils";
import { CategoryCardProps } from "./CategoryCard.types";

function CategoryCard({ category }: CategoryCardProps) {
  const categoryVariants = {
    men: "bg-iceClimber-400 hover:bg-iceClimber-500 active:bg-iceClimber-600",
    women: "bg-brinkPink-400 hover:bg-brinkPink-500 active:bg-brinkPink-600",
  };

  return (
    <div
      className={`relative m-4 flex w-[calc(50%-2rem)] flex-col items-center justify-center rounded-[30px] px-12 py-44 shadow-[10px_15px_20px_0_rgba(0,0,0,0.15)] ${categoryVariants[category]}`}
    >
      <Link
        href={`/${category}s-clothing`}
        className="absolute left-0 top-0 z-[1] flex h-full w-full items-center justify-center rounded-[30px]"
      >
        <span className="text-center text-[3.5rem] font-bold text-white">
          {toTitleCase(category)}&apos;s Clothing
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;
