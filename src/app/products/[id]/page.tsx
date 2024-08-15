import type { Product } from "@/models/product";
import { getAllProducts, getProductById } from "@/services/products";
import { Product as ProductTemplate } from "@/ui-core";

export async function generateStaticParams() {
	const products = await getAllProducts();

	return products.map((product) => ({ id: String(product.id) }));
}

export default async function Product({ params }: { params: { id: string } }) {
	const product = await getProductById(params.id);

	return <ProductTemplate product={product as Product} />;
}
