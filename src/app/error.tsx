"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button, Section } from "@/ui-core";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex justify-center">
			<Section heading="Something Went Wrong!">
				<div className="m-4 flex justify-center">
					<Button
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
					>
						Try again
					</Button>
				</div>
			</Section>
		</div>
	);
}
