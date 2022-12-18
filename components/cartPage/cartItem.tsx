import styled from "@emotion/styled";
import Image from "next/image";
import { CartItemState } from "../../types/products";
import { BREAK_POINT_PHONE } from "../../const";

type CartItemsProps = {
    cartItem: CartItemState;
    cartCheckedItems: CartItemState[];
    handleChangeChecked: (cartItem: CartItemState) => void;
    handleStockChange: (stock: number, cartItem: CartItemState) => void;
};

const CartItem = (props: CartItemsProps) => {
    const {
        cartItem,
        cartCheckedItems,
        handleChangeChecked,
        handleStockChange,
    } = props;
    const COUPON = () => {
        if (cartItem.product.availableCoupon !== undefined) {
            return true;
        }
        return false;
    };

    return (
        <CartItemContainer>
            <td className="mobileBorder">
                <input
                    type="checkbox"
                    checked={cartCheckedItems.includes(cartItem) ? true : false}
                    onChange={() => handleChangeChecked(cartItem)}
                />
            </td>
            <td className="productInfoGroup">
                <Image
                    src={cartItem.product.image}
                    width={130}
                    height={130}
                    alt="상품 이미지"
                />
                <div className="productInfo">
                    <div className="itemName">{cartItem.product.item_name}</div>
                    <div className="price">{cartItem.product.price}</div>
                    <span className={COUPON() ? "coupon" : "activeCoupon"}>
                        {COUPON() ? "쿠폰 적용 불가능" : "쿠폰 적용 가능"}
                    </span>
                </div>
            </td>
            <td className="stock">
                <input
                    type="number"
                    min={1}
                    value={cartItem.stock}
                    max={49}
                    onChange={(e) => {
                        handleStockChange(Number(e.target.value), cartItem);
                    }}
                />
            </td>

            <td className="productPrice">
                {cartItem.stock * cartItem.product.price}
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

    .activeCoupon {
        padding: 5px 10px;
        color: #fff;
        background-color: #ff4800;
        border-radius: 50px;
        font-size: 12px;
    }

    .coupon {
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

    .stock {
        input {
            padding: 5px;
            text-align: center;
            font-weight: 700;
        }
    }

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;

        td {
            border: none;
            padding: 10px 0;
        }

        .mobileBorder {
            border-top: 3px solid #222;
        }
    }
`;

export default CartItem;
