"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Product } from "@/models/product";
import { getProductById } from "@/services/products";
import { Product as ProductTemplate } from "@/ui-core";

export default function Product() {
	const { id } = useParams();
	const productId = id as string;

	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = async () => {
			const product = await getProductById(productId);
			if (product) {
				setProduct(product);
				setLoading(false);
			}
		};

		fetchProduct();
	});

	return <ProductTemplate product={product as Product} loading={loading}/>;
}
