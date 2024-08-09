import { useEffect, useRef } from "react";
import { useCart } from "../../../../context/cart/cartContext";
import { CartItem } from "../../molecules";
import { Button } from "../../atoms/Button";
import { BsXCircle } from "react-icons/bs";
import { CartProps } from "./Cart.types";
import { ButtonIcon } from "../../atoms/ButtonIcon";

const Cart = ({ onClose, isOpen }: CartProps) => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

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

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-[3] flex h-full w-[40vw] flex-col bg-white shadow-[-2px_0_10px_0_rgba(0,0,0,0.15)] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b-2 border-solid border-b-desiredDawn p-4">
          <h1 className="text-2xl font-black">Cart</h1>
          <Button onClick={onClose}>
            <ButtonIcon Icon={BsXCircle} />
          </Button>
        </div>

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

        {cart.length > 0 && (
          <div className="flex flex-col gap-4 border-t-2 border-solid border-t-desiredDawn p-4">
            <div className="flex justify-between text-[1.2rem] font-black">
              <span>Total Price</span>
              <span>Rs&nbsp;{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-4">
              <Button>Checkout</Button>
              <Button onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[2] bg-[rgba(0,0,0,0.3)]" />
      )}
    </>
  );
};

export default Cart;
// TODO: Fix z-indexes
