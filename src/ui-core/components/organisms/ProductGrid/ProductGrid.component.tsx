import { ProductCard } from "../../molecules";
import { ProductGridProps } from "./ProductGrid.types";

function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex flex-row flex-wrap items-stretch justify-start">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
