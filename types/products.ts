export type ProductState = {
    item_no: number;
    item_name: string;
    detail_image_url: string;
    price: number;
    score: number;
    availableCoupon?: boolean;
};

export type ProductsState = {
    products : ProductState[];
};

export type CartItemState = {
    product: ProductState;
    stock: number;
    checked : boolean;
}

export type CartItemsState = {
    cartItems : CartItemState[];
};
