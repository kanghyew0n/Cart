import styled from "@emotion/styled";
import Image from "next/image";

export const CartButton = () => {
    return (
        <ButtonContainer onClick={() => console.log("here")}>
            <Image
                src="/cart.svg"
                width={22}
                height={22}
                alt="장바구니 아이콘"
            />
        </ButtonContainer>
    );
};

const ButtonContainer = styled.div`
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 50px;
    position: absolute;
    right: 15px;
    top: 15px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
