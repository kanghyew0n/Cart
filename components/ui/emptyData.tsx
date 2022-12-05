import styled from "@emotion/styled";
import Link from "next/link";

const EmptyData = () => {
    return (
        <EmptyDataContainer>
            <div>장바구니가 비어있습니다!</div>
            <Link href="/products">상품 구경하기 →</Link>
        </EmptyDataContainer>
    );
};

const EmptyDataContainer = styled.div`
    background-color: #f5f5f5;
    color: #929292;
    font-family: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 128px 0;
    border-radius: 15px;
    flex-direction: column;
    
    div {
        margin-bottom: 16px;
    };

    a {
        font-size: 14px;
        border: 1px solid #929292;
        padding: 8px 15px;
        border-radius: 50px;
        &:hover{
            background-color:  #000;
            color: #f5f5f5;
        }
    }
`;

export default EmptyData;
