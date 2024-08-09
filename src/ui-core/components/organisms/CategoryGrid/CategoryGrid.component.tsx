import { CategoryCard } from "../../molecules";

function CategoryGrid() {
  return (
    <div className="flex flex-row flex-wrap items-stretch justify-center">
      <CategoryCard category="men" />
      <CategoryCard category="women" />
    </div>
  );
}

export default CategoryGrid;
