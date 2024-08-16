import Link from "next/link";
import { Button, Section } from "@/ui-core";

export default function NotFound() {
	return (
		<div className="flex justify-center">
			<Section heading="Page Not Found!">
				<div className="m-4 flex justify-center">
					<Button asChild>
						<Link href="/">Return Home</Link>
					</Button>
				</div>
			</Section>
		</div>
	);
}
