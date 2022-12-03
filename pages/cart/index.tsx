import styled from "@emotion/styled";
import CartItem from "../../components/cartPage/cartItem";
import { TotalPriceBar } from "../../components/cartPage/totalPriceBar";
import Layout from "../../components/ui/layout";
import useCartItem from "../../store/cartStore";

export default function CartPage() {
    const { cartItems } = useCartItem();
    return (
        <>
            <Layout>
                <CartPageContainer>
                    <tbody>
                        <CartTableTop>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>상품 정보</th>
                            <th>수량</th>
                            <th>주문 금액</th>
                        </CartTableTop>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.product.item_no}
                                cartItem={item}
                            />
                        ))}
                    </tbody>
                </CartPageContainer>
                <Notice>
                    장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 쿠폰을
                    적용할 수 있습니다. (단, 쿠폰 적용 가능 삼품 한정)
                </Notice>
            </Layout>
            <TotalPriceBar />
        </>
    );
}

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
`;

const Notice = styled.p`
    margin-top: 16px;
    text-align: end;
    margin-bottom: 320px;
    font-size: 12px;
    /* color: ; */
`;
