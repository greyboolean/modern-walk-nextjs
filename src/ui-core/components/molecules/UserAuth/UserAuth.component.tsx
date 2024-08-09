import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../../atoms/Button";

export function UserAuth() {
	return (
		<div>
			<SignedOut>
				<SignInButton>
					<Button>Sign In</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	);
}

export default UserAuth;
