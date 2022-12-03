import styled from "@emotion/styled";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Product } from "../../types/products";
import { getProductsItem } from "../../api/productsAPI";
import { tagItems } from "../../const";
import Layout from "../../components/ui/layout";
import ProductItem from "../../components/productPage/productItem";
import { Tag } from "../../components/productPage/tag";
import { Pagination } from "../../components/productPage/pagination";
import usePaging from "../../store/pageInfoStore";

const maxPage = 3;

export default function ProductsPage() {
    const { pageInfo } = usePaging();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (pageInfo < maxPage) {
            const nextPage = pageInfo + 1;
            queryClient.prefetchQuery(["products", nextPage], () =>
                getProductsItem()
            );
        }
    }, [pageInfo, queryClient]);

    const {
        data: products,
        isLoading,
        isError,
    } = useQuery(["products", pageInfo], () => getProductsItem(), {
        keepPreviousData: true,
    });

    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return <h3>Oops, 웁스 something went wrong</h3>;

    const TAG = () => {
        return tagItems.map((item, idx) => <Tag key={idx} tag={item} />);
    };

    const PRODUCTS = () => {
        return products
            .slice((pageInfo - 1) * 4, pageInfo * 4)
            .map((product: Product) => (
                <ProductItem key={product.item_no} product={product} />
            ));
    };

    return (
        <>
            <Layout>
                <TagGroup>{TAG()}</TagGroup>
                <ProductsContainer>{PRODUCTS()}</ProductsContainer>
                <Pagination totalItemNum={products.length} />
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
