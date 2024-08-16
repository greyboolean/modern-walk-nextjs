import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider, WatchlistProvider } from "@/context";
import { Layout, Main } from "@/ui-core";
import Providers from "./Providers";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Modern Walk",
		default: "Modern Walk",
	},
	description: "Modern Walk is a fashion retail web app.",
};

// const queryClient = new QueryClient();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={quicksand.variable}>
			<body>
				{/* <QueryClientProvider client={queryClient}> */}
				{/* <ClerkProvider>
					<WatchlistProvider>
						<CartProvider> */}
				<Providers>
					<Layout>
						<Main>{children}</Main>
					</Layout>
				</Providers>
				{/* </CartProvider>
					</WatchlistProvider>
				</ClerkProvider> */}
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				{/* </QueryClientProvider> */}
			</body>
		</html>
	);
}
