import styled from "@emotion/styled";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { ProductState } from "../../types/products";
import { getProductsItem } from "../../api/productsAPI";
import Layout from "../../components/ui/layout";
import ProductItem from "../../components/productPage/productItem";
import { Pagination } from "../../components/productPage/pagination";
import usePaging from "../../store/pageInfoStore";
import { BREAK_POINT_PHONE } from "../../const";

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

    console.log(products)

    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return <h3>Error...!</h3>;

    const PRODUCTS = () => {
        return products
            .slice((pageInfo - 1) * 4, pageInfo * 4)
            .map((product: ProductState) => (
                <ProductItem key={product.item_no} product={product} />
            ));
    };

    return (
        <>
            <Layout>
                <ProductsContainer>{PRODUCTS()}</ProductsContainer>
                <Pagination totalItemNum={products.length} />
            </Layout>
        </>
    );
}


const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        display: block;
    }
`;
