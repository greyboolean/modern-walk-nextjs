/*
import { Home as HomeTemplate } from "@/ui-core";

export default function Home() {
  return <HomeTemplate />
}
*/
import { getAllProducts } from "@/services/products";
import { Home as HomeTemplate } from "@/ui-core";

export const revalidate = 60;

export default async function Home() {
	const products = await getAllProducts();

	return <HomeTemplate products={products} />;
}
