import { ProductCard, Section } from "@/ui-core";
import { ProductProps } from "./Product.types";

export default function Product({ product }: ProductProps) {
	return (
		<div>
			<Section heading="Product">
				<ProductCard product={product} />
			</Section>
		</div>
	);
}
