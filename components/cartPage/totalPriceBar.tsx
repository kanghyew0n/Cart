import styled from "@emotion/styled";
import Link from "next/link";
import useCartItem from "../../store/cartStore";

export const TotalPriceBar = () => {
    const { cartItems } = useCartItem();

    const TOTALPRICE = () => {
        let sumPrice = 0;
        cartItems.map((item) => (sumPrice += item.product.price));
        return sumPrice;
    };

    return (
        <TotalPriceBarContainer>
            <InnerContainer>
                <div className="totalPrice">
                    <div>총 결제 금액</div>
                    <div className="price">
                        <span>{TOTALPRICE()}</span>원
                    </div>
                </div>
                <div className="buttonGroup">
                    <Link href="/products">
                        <span className="continue">CONTINUE SHOPPING</span>
                    </Link>
                    <span className="checkOut">CHECK OUT</span>
                </div>
            </InnerContainer>
        </TotalPriceBarContainer>
    );
};

const TotalPriceBarContainer = styled.div`
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: #fff;

    filter: drop-shadow(0px -7px 10px rgba(0, 0, 0, 0.08));
    z-index: 200;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .totalPrice,
    .buttonGroup {
        display: flex;
        align-items: center;
    }

    .totalPrice {
        gap: 32px;
        font-size: 18px;
        .span {
            font-weight: 500;
            font-size: 18px;
        }

        .price {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: #ff4800;
            span {
                font-weight: 800;
                color: #ff4800;
                margin-right: 5px;
            }
        }
    }

    .buttonGroup {
        gap: 32px;
        font-size: 14px;
        .checkOut {
            padding: 8px 15px;
            background-color: #ff4800;
            color: #fff;
            border-radius: 50px;
            cursor: pointer;
        }
    }
`;
