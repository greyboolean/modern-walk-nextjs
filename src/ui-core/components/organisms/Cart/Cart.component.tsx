"use client"

// import { useEffect, useRef } from "react";
import { useCart } from "../../../../context/cart/cartContext";
import { CartItem } from "../../molecules";
import { Button } from "../../atoms/Button";
// import { BsCartFill, BsXCircle } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
// import { CartProps } from "./Cart.types";
import { ButtonIcon } from "../../atoms/ButtonIcon";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Sheet";

// const Cart = ({ onClose, isOpen }: CartProps) => {
const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  /*
  const originalOverflowRef = useRef(document.body.style.overflow);

  useEffect(() => {
    if (isOpen) {
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowRef.current;
    }

    // cleanup function to ensure scrolling is re-enabled when the component unmounts or isOpen changes.
    return () => {
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, [isOpen]);
  */

  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <ButtonIcon Icon={BsCartFill} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <div className="scrollbar-hide flex flex-grow flex-col gap-4 overflow-y-auto p-4">
            {cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <CartItem key={index} cartItem={item} />
                ))}
              </>
            ) : (
              <p>Your Cart is empty.</p>
            )}
          </div>
          <SheetFooter>
            <div className="flex justify-between text-[1.2rem] font-black">
              <span>Total Price</span>
              <span>Rs&nbsp;{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <SheetClose>
                <Button variant="secondary" onClick={clearCart}>Clear Cart</Button>
              </SheetClose>
              <Button>Checkout</Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
  );
};

export default Cart;
// TODO: Fix z-indexes
