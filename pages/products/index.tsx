import styled from "@emotion/styled";
import ProductItem from "../../components/productPage/productItem";
import { PRODUCT } from "../../types/products";
import { useQuery } from "react-query";
import { getProductsItem } from "../../api/productsAPI";
import Layout from "../../components/ui/layout";
import { tagItems } from "../../const";
import Tag from "../../components/ui/tag";

export default function ProductsPage() {
    const {
        data: products,
        isLoading,
        isError,
    } = useQuery(["products"], () => getProductsItem(), {
        keepPreviousData: true,
    });
    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return <h3>Oops, 웁스 something went wrong</h3>;

    const TAG = () => {
        return tagItems.map((item, idx) => <Tag key={idx} tag={item} />);
    };

    return (
        <>
            <Layout>
                <TagGroup>{TAG()}</TagGroup>
                <ProductsContainer>
                    {products.map((product: PRODUCT) => (
                        <ProductItem key={product.item_no} product={product} />
                    ))}
                </ProductsContainer>
            </Layout>
        </>
    );
}

const TagGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 48px;
`;

const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
`;

