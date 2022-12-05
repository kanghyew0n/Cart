import create from "zustand";
import { CartItemState } from "../types/products";

type CartItemType = {
    cartItems: CartItemState[];
    setCartItems: (cartItems: CartItemState[]) => void;
};

const useCartItem = create<CartItemType>((set) => ({
    cartItems: [],
    setCartItems: (cartItems: CartItemState[]) => set(() => ({ cartItems })),
}));

export default useCartItem;
