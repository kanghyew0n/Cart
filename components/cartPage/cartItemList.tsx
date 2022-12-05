import styled from "@emotion/styled";
import { useEffect } from "react";
import CartItem from "../../components/cartPage/cartItem";
import useCartItem from "../../store/cartStore";
import { CartItemState } from "../../types/products";
import EmptyData from "../ui/emptyData";

const CartItemList = (props: any) => {
    const { cartCheckedItems, setCartCheckedItems, setCouponChecked } = props;
    const { cartItems, setCartItems } = useCartItem();

    useEffect(() => {
        if (cartCheckedItems.length === 0) {
            setCouponChecked([]);
        }
    }, [cartCheckedItems, setCouponChecked]);

    const handleAllChecked = (checked: boolean) => {
        if (checked) {
            setCartCheckedItems(cartItems);
        } else {
            setCartCheckedItems([]);
            setCouponChecked([]);
        }
    };

    const handleChangeChecked = (cartItem: CartItemState) => {
        if (cartItem.checked) {
            setCartCheckedItems(
                cartCheckedItems.filter(
                    (item: CartItemState) => item !== cartItem
                )
            );
            cartItem.checked = false;
        } else if (!cartItem.checked) {
            setCartCheckedItems([...cartCheckedItems, cartItem]);
            cartItem.checked = true;
        }
    };

    const handleStockChange = (stock: number, cartItem: CartItemState) => {
        if (stock === 0) {
            return alert("최소 1개의 수량이 필요합니다.");
        }
        if (stock > 49) {
            return alert("최대 수량은 49개입니다.");
        }
        cartItem.stock = stock;
        setCartItems([...cartItems]);
    };

    return (
        <>
            <CartPageContainer>
                <tbody>
                    <CartTableTop>
                        <th>
                            <input
                                type="checkbox"
                                checked={
                                    cartCheckedItems.length === cartItems.length
                                        ? true
                                        : false
                                }
                                onChange={(e) =>
                                    handleAllChecked(e.target.checked)
                                }
                            />
                        </th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th className="orderPrice">주문 금액</th>
                    </CartTableTop>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.product.item_no}
                            cartItem={item}
                            cartCheckedItems={cartCheckedItems}
                            handleChangeChecked={handleChangeChecked}
                            handleStockChange={handleStockChange}
                        />
                    ))}
                </tbody>
            </CartPageContainer>
            <Notice>
                장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 쿠폰을
                적용할 수 있습니다. (단, 쿠폰 적용 가능 삼품 한정)
            </Notice>
        </>
    );
};

const CartPageContainer = styled.table`
    table-layout: auto;
    width: 100%;
`;

const CartTableTop = styled.tr`
    height: 64px;

    th {
        padding: 0 16px;
        font-size: 16px;
        font-weight: 400;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
    }

    .orderPrice {
        width: 200px;
    }
`;

const Notice = styled.p`
    margin-top: 16px;
    margin-bottom: 64px;
    text-align: end;
    font-size: 12px;
`;

export default CartItemList;
