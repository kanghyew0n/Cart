import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { BREAK_POINT_PHONE } from "../../const";

export const Header = () => {
    const router = useRouter();

    return (
        <HeaderContainer>
            <InnerContainer>
                <Link href="/">
                    <h2>Shop</h2>
                </Link>
                <ul>
                    <Link href="/products">
                        <li
                            className={
                                router.pathname === "/products" ? "active" : ""
                            }
                        >
                            Products
                        </li>
                    </Link>
                    <Link href="/cart">
                        <li
                            className={
                                router.pathname === "/cart" ? "active" : ""
                            }
                        >
                            Cart
                        </li>
                    </Link>
                </ul>
            </InnerContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
`;

const InnerContainer = styled.div`
    height: 100%;
    padding: 0 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 32px;

        li {
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:hover {
                color: #ff4800;
            }
        }

        .active {
            color: #ff4800;
        }
    }
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 0 1rem;
        h2,
        li {
            font-size: 16px;
        }
    }
`;
