import styled from "@emotion/styled";
import Image from "next/image";
import { PRODUCT } from "../../types/products";
import { CartButton } from "../ui/cartButton";

type ProductsProps = {
    product: PRODUCT;
};

export default function ProductItem({ product }: ProductsProps) {
    return (
        <ProductItemContainer>
            <CartButton/>
            <Image
                src={product.detail_image_url}
                width={500}
                height={500}
                alt="상품 이미지"
                className="productImage"
            />
            <div className="name">{product.item_name}</div>
            <div className="price">
                {product.price}
                <span>원</span>
            </div>
        </ProductItemContainer>
    );
}

const ProductItemContainer = styled.div`
    width: calc((100% - 96px) / 4);
    margin-bottom: 16px;
    position: relative;

    .productImage {
        width: 100%;
        height: 304px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 16px;
        cursor: pointer;
    }

    .name {
        margin-bottom: 10px;
        line-height: 150%;
    }

    .price {
        font-weight: 700;
        span {
            font-weight: 400;
        }
    }

    &:hover {
            div {
                opacity: 1;
            }
        }
`;
