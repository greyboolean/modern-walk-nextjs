import { ReactNode } from "react";
import { Header } from "@/ui-core";

type LayoutProps = {
	children: ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

export default Layout;
