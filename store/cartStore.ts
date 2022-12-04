import create from "zustand";
import { CartItem } from "../types/products";

type CartItemType = {
    cartItems: CartItem[];
    setCartItems: (cartItems: CartItem[]) => void;
};

const useCartItem = create<CartItemType>((set) => ({
    cartItems: [],
    setCartItems: (cartItems: CartItem[]) => set(() => ({ cartItems })),
}));

export default useCartItem;
