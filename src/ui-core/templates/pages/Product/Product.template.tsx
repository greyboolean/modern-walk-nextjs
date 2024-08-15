import { ProductCard, Section } from "@/ui-core";
import { ProductProps } from "./Product.types";

export default function Product({ product, loading } : ProductProps) {
	return (
		<div>
			<Section heading="Product" loading={loading}>
				<ProductCard product={product} />
			</Section>
		</div>
	);
}
