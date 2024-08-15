"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useWatchlist } from "../../../../context/watchlist/watchlistContext";
import { useCart } from "../../../../context/cart/cartContext";
import { Button } from "../../atoms/Button";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsCart, BsCartFill, BsChevronRight } from "react-icons/bs";
import { ProductCardProps } from "./ProductCard.types";
// import { useNavigate } from "react-router-dom";

function ProductCard({ product }: ProductCardProps) {
	const { title, image, price, description, category } = product;
	const { toggleProduct, isInWatchlist } = useWatchlist();
	const { toggleCartItem, isInCart } = useCart();
	const { isSignedIn } = useAuth();
	const { redirectToSignIn } = useClerk();
	// const navigate = useNavigate();

	const handleWatchlistClick = () => {
		if (isSignedIn) {
			toggleProduct(product);
		} else {
			// navigate("/sign-in");
			redirectToSignIn();
		}
	};

	// const handleCartClick = () => {
	// 	if (isSignedIn) {
	// 		toggleCartItem(product);
	// 	} else {
	// 		redirectToSignIn();
	// 	}
	// };
	const handleCartClick = () => {
		toggleCartItem(product);
	};

	// TODO: Remove index signature and imporve types
	type Category = "men's clothing" | "women's clothing";
	const categoryVariants: Record<string, string> & {
		[K in Category]?: string;
	} = {
		"men's clothing": "bg-iceClimber-400",
		"women's clothing": "bg-brinkPink-400",
	};

	return (
		<div
			className={
				"m-4 flex w-[calc(25%-2rem)] flex-col items-center rounded-[20px] bg-white shadow-[5px_7.5px_10px_0_rgba(0,0,0,0.15)]"
			}
		>
			<h2
				className={`mx-12 mb-0 mt-6 line-clamp-1 text-ellipsis text-[1.2rem] font-black`}
			>
				{title}
			</h2>
			<div className="w-1/2 px-0 py-6">
				{/* <img
          className="h-[150px] w-full object-contain"
          src={image}
          alt={title}
        /> */}
				<div className="h-[150px] w-full relative">
					<Image
						fill
						src={image}
						alt={title}
						className="object-contain"
					/>
				</div>
			</div>
			<div
				className={`flex w-full flex-col items-center rounded-[20px] px-12 pb-6 pt-4 ${categoryVariants[category]}`}
			>
				<div className="mb-2 flex flex-row items-center justify-center text-[1.2rem] font-black text-magicInc-700">
					<span>Rs&nbsp;</span>
					<span>{price}</span>
				</div>
				<p className={`line-clamp-4 text-center font-normal`}>
					{description.replace(/(,|\/)(\S)/g, "$1 $2")}
				</p>
				<div className="mt-4 flex gap-4">
					<Button onClick={handleWatchlistClick} size="sm">
						{/* {isInProductsList(product)
						? "Remove from Watchlist"
						: "Add to Watchlist"} */}
						{isInWatchlist(product) ? <FaHeart /> : <FaRegHeart />}
					</Button>
					<Button onClick={handleCartClick} size="sm">
						{isInCart(product) ? <BsCartFill /> : <BsCart />}
					</Button>
					<Button size="sm" asChild>
						<Link href={`/products/${product.id}`}>
							<BsChevronRight />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
