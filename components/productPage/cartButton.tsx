import styled from "@emotion/styled";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { ProductState } from "../../types/products";
import useCartItem from "../../store/cartStore";

type CartButtonProps = {
    handleAddCart: MouseEventHandler<HTMLDivElement> | undefined;
    product: ProductState;
};

export const CartButton = (props: CartButtonProps) => {
    const { handleAddCart, product } = props;
    const { cartItems } = useCartItem();

    const IMAGE = () => {
        if (
            cartItems
                .map((item) => item.product.item_no)
                .includes(product.item_no)
        ) {
            return (
                <Image
                    src="/removeCart.svg"
                    width={22}
                    height={22}
                    alt="장바구니 아이콘"
                />
            );
        } else {
            return (
                <Image
                    src="/addCart.svg"
                    width={22}
                    height={22}
                    alt="장바구니 아이콘"
                />
            );
        }
    };

    return (
        <ButtonContainer onClick={handleAddCart}>
            {IMAGE()}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 50px;
    position: absolute;
    right: 15px;
    top: 15px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
