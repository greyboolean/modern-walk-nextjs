import { getProductsByCategory } from "@/services/products";
import { Clothing } from "@/ui-core";

export default async function Home() {
	const products = await getProductsByCategory("men");

	return <Clothing category="men" products={products} />;
}
