import { Dispatch, SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import Coupon from "./coupon";
import { useQuery } from "react-query";
import { getCoupons } from "../../api/productsAPI";
import { CouponState } from "../../types/coupons";
import { CartItemState } from "../../types/products";

type CouponListProps = {
    couponChecked: CouponState[];
    setCouponChecked: Dispatch<SetStateAction<CouponState[]>>;
    cartItems: CartItemState[];
};

const CouponList = (props: CouponListProps) => {
    const { couponChecked, setCouponChecked, cartItems } = props;
    const {
        data: coupons,
        isLoading,
        isError,
    } = useQuery(["coupon"], () => getCoupons());
    if (isLoading) return <h3>Loading...</h3>;
    if (isError) return <h3>Error...!</h3>;

    const handleChangeChecked = (coupon: CouponState) => {
        if (cartItems.length === 0) {
            setCouponChecked([]);
            return alert("상품을 선택해주세요");
        }
        if (couponChecked.length === 1) {
            setCouponChecked([]);
        }
        if (couponChecked.includes(coupon)) {
            return setCouponChecked([]);
        }
        setCouponChecked([coupon]);
    };

    return (
        <>
            <CouponListContainer>
                <table className="couponTable">
                    <tbody>
                        {coupons.map((coupon: CouponState, idx: number) => (
                            <Coupon
                                key={idx}
                                coupon={coupon}
                                checked={couponChecked}
                                handleChange={handleChangeChecked}
                            />
                        ))}
                    </tbody>
                </table>
            </CouponListContainer>
        </>
    );
};

const CouponListContainer = styled.div`
    display: flex;
    justify-content: end;
    .couponTable {
        table-layout: auto;
        border-top: 1px solid #eee;
        margin-bottom: 220px;
    }
`;

export default CouponList;
