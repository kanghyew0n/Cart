import styled from "@emotion/styled";
import Image from "next/image";
import { CartItem } from "../../types/products";

type CartItemsProps = {
    cartItem: CartItem;
};

const CartItem = (props: CartItemsProps) => {
    return (
        <CartItemContainer>
            <td>
                <input type="checkbox" />
            </td>
            <td className="productInfoGroup">
                <Image
                    src={props.cartItem.product.detail_image_url}
                    width={130}
                    height={130}
                    alt="상품 이미지"
                />
                <div className="productInfo">
                    <div className="itemName">
                        {props.cartItem.product.item_name}
                    </div>
                    <div className="price">{props.cartItem.product.price}</div>
                    <span
                        className={
                            props.cartItem.product.availableCoupon !== undefined
                                ? "cupon"
                                : "activeCupon"
                        }
                    >
                        {props.cartItem.product.availableCoupon !== undefined
                            ? "쿠폰 적용 불가능"
                            : "쿠폰 적용 가능"}
                    </span>
                </div>
            </td>
            <td className="stock">{props.cartItem.stock}</td>
            <td className="productPrice">
                {props.cartItem.stock * props.cartItem.product.price}
                <span>원</span>
            </td>
        </CartItemContainer>
    );
};

const CartItemContainer = styled.tr`
    td {
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
        padding: 0 32px;
        text-align: center;
    }

    .productInfoGroup {
        display: flex;
        align-items: center;
        padding: 20px 16px;
        gap: 24px;

        .productInfo {
            text-align: start;
            .itemName {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 5px;
            }
        }
    }

    .activeCupon {
        padding: 5px 10px;
        color: #fff;
        background-color: #ff4800;
        border-radius: 50px;
        font-size: 12px;
    }

    .cupon {
        padding: 5px 10px;
        color: #ff4800;
        border: 1px solid #ff4800;
        background-color: #fff;
        border-radius: 50px;
        font-size: 12px;
    }

    .price {
        margin-bottom: 15px;
    }

    .stock,
    .productPrice {
        font-size: 18px;
        font-weight: 700;

        span {
            font-weight: 400;
            margin-left: 5px;
        }
    }

    .productPrice {
        border-right: none;
    }
`;

export default CartItem;