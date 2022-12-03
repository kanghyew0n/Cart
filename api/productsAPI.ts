import axios from "axios";

export const getProductsItem = async () => {
    try {
        const productsItem = await axios.get(
            `http://localhost:8000/productItems?_sort=score&_order=desc`
        );
        return productsItem.data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`${err.message} 상품 데이터 로딩 실패`);
        }
        throw new Error("상품 데이터 로딩 실패");
    }
};
