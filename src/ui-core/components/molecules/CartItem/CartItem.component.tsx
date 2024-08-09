import { useCart } from "../../../../context/cart/cartContext";
import { Button } from "../../atoms/Button";
import { BsDash, BsPlus, BsX } from "react-icons/bs";
import { CartItemProps } from "./CartItem.types";

function CartItem({ cartItem }: CartItemProps) {
  const { product, quantity } = cartItem;
  const { removeCartItem, incrementCartItem, decrementCartItem } = useCart();

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-[20px] p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-4">
          <img className="h-[50px]" src={product.image} alt={product.title} />
          <h3 className="">{product.title}</h3>
          <p className="ml-auto">
            Rs&nbsp;{(product.price * quantity).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => decrementCartItem(product)} size="sm">
              <BsDash />
            </Button>
            <span>{quantity}</span>
            <Button onClick={() => incrementCartItem(product)} size="sm">
              <BsPlus />
            </Button>
          </div>
          <Button onClick={() => removeCartItem(product)} size="sm">
            <BsX />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
