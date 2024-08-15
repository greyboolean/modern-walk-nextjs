"use client"

// import { useState } from "react";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { Cart } from "../../organisms";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button";
import { FaHeart } from "react-icons/fa6";
// import { BsCartFill } from "react-icons/bs";
import { ButtonIcon } from "../../atoms/ButtonIcon";

function Navbar() {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const toggleCart = () => setIsCartOpen((isCartOpen) => !isCartOpen);

  return (
    <nav className="col-start-3 flex items-center justify-end gap-4">
      <SignedIn>
        <Link href="/watchlist">
          {/* <Button>Watchlist</Button> */}
          <Button>
            <ButtonIcon Icon={FaHeart} />
          </Button>
        </Link>
      </SignedIn>
      <Cart />
      {/* <Button onClick={toggleCart}>
        <ButtonIcon Icon={BsCartFill} />
      </Button> */}
      {/* </SignedIn> */}
      <UserAuth />
      {/* <Cart onClose={toggleCart} isOpen={isCartOpen} /> */}
    </nav>
  );
}

export default Navbar;
