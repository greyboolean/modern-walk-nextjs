import { toTitleCase } from "../../../../utils/utils";
import { Section, ProductGrid } from "../../../components";
import { ClothingProps } from "./Clothing.types";

function Clothing({ category, products }: ClothingProps) {
	return (
		<div>
			<Section heading={`${toTitleCase(category)}'s Clothing`}>
				<ProductGrid products={products} />
			</Section>
		</div>
	);
}

export default Clothing;
