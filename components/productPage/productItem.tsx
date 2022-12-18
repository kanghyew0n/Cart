import styled from "@emotion/styled";
import Image from "next/image";
import { ProductState } from "../../types/products";
import { CartButton } from "./cartButton";
import useCartItem from "../../store/cartStore";
import { BREAK_POINT_PHONE } from "../../const";

type ProductsProps = {
    product: ProductState;
};

const ProductItem = (props: ProductsProps) => {
    const { product } = props;
    const { cartItems, setCartItems } = useCartItem();

    const handleAddCart = (product: ProductState) => {
        if (
            cartItems
                .map((item) => item.product.item_no)
                .includes(product.item_no)
        ) {
            if (window.confirm("이미 장바구니에 존재합니다, 장바구니에서 제거하시겠습니까?")) {
                return setCartItems(
                    cartItems.filter(
                        (item) => item.product.item_no !== product.item_no
                    )
                );
            } else {
                return;
            }
        }

       
        if (cartItems.length === 3) {
            return alert("상품은 최대 3개까지 담을 수 있습니다.");
        }

        setCartItems([...cartItems, { product, stock: 1, checked: true }]);
    };

    return (
        <ProductItemContainer>
            <CartButton
                handleAddCart={() => handleAddCart(product)}
                product={product}
            />
            <Image
                src={product.image}
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

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        width: 100%;
        margin-bottom: 32px;
    }
`;

export default ProductItem;
