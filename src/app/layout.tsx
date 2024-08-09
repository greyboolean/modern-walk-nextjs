import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Layout, Main } from "@/ui-core";

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={quicksand.variable}>
				<Layout>
					<Main>{children}</Main>
				</Layout>
			</body>
		</html>
	);
}
