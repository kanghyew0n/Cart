export type Product = {
    item_no: number;
    item_name: string;
    detail_image_url: string;
    price: number;
    score: number;
    availableCoupon?: boolean;
};

export type Products = {
    products : Product[];
};

export type CartItem = {
    product: Product;
    stock: number;
    checked : boolean;
}

export type CartItems = {
    cartItems : CartItem[];
};
