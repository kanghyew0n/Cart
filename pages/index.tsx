import styled from "@emotion/styled";
import Layout from "../components/ui/layout";
import { BREAK_POINT_PHONE } from "../const";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Layout>
                <HomeContainer>
                    <Link href="/products">
                        <div className="productButton">상품 보러가기 →</div>
                    </Link>
                    <Link href="/cart">
                        <div className="cartButton">장바구니 바로가기 →</div>
                    </Link>
                </HomeContainer>
            </Layout>
        </>
    );
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;

    div {
        font-size: 32px;
        padding: 20px 40px;
        border: 1px solid #000;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
            color: #ff4800;
        }
    }

    .productButton {
        background-color: #000;
        color: #fff;
    }

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
        div {
            font-size: 20px;
            padding: 18px 30px;
        }
    }
`;
