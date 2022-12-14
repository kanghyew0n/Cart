import axios from "axios";

export const getProductsItem = async () => {
    try {
        const productsItem = await axios.get(
            `https://fakestoreapi.com/products?limit=15`
        );
        return productsItem.data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`${err.message} 상품 데이터 로딩 실패`);
        }
        throw new Error("상품 데이터 로딩 실패");
    }
};

export const getCoupons = async () => {
    try {
        const coupons = await axios.get(
            `http://localhost:8000/coupons?_sort=score&_order=desc`
        );
        return coupons.data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`${err.message} 상품 데이터 로딩 실패`);
        }
        throw new Error("상품 데이터 로딩 실패");
    }
};
