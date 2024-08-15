import { getProductsByCategory } from "@/services/products";
import { Clothing } from "@/ui-core";

export const metadata = {
	title: "Women's Clothing",
};

export default async function Home() {
	const products = await getProductsByCategory("women");

	return <Clothing category="women" products={products} />;
}
