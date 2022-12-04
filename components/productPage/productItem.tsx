import styled from "@emotion/styled";
import Image from "next/image";
import { Product } from "../../types/products";
import { CartButton } from "./cartButton";
import useCartItem from "../../store/cartStore";

type ProductsProps = {
    product: Product;
};

const ProductItem = (props: ProductsProps) => {
    const { cartItems, setCartItems } = useCartItem();

    const handleAddCart = (product: Product) => {
         // 같은 상품은 수량 증가
         if(cartItems.map((item) => item.product.item_no).includes(product.item_no)) {
            return alert("이미 장바구니에 존재합니다, 장바구니로 이동하기")

        }

        // 최대 3개의 상품
        if (cartItems.length === 3) {
            return alert("상품은 최대 3개까지 담을 수 있습니다.");
        }

        // 카트 아이템에 아이템 추가
        setCartItems([...cartItems, { product, stock: 1, checked: true }]);
    };

    return (
        <ProductItemContainer>
            <CartButton handleAddCart={() => handleAddCart(props.product)} product={props.product}/>
            <Image
                src={props.product.detail_image_url}
                width={500}
                height={500}
                alt="상품 이미지"
                className="productImage"
            />
            <div className="name">{props.product.item_name}</div>
            <div className="price">
                {props.product.price}
                <span>원</span>
            </div>
        </ProductItemContainer>
    );
};

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

export default ProductItem;
