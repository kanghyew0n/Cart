import { useState } from "react";
import CartItemList from "../../components/cartPage/cartItemList";
import CouponList from "../../components/cartPage/couponList";
import { TotalPriceBar } from "../../components/cartPage/totalPriceBar";
import EmptyData from "../../components/ui/emptyData";
import Layout from "../../components/ui/layout";
import useCartItem from "../../store/cartStore";
import { CouponState } from "../../types/coupons";

export default function CartPage() {
    const { cartItems } = useCartItem();
    const [cartCheckedItems, setCartCheckedItems] = useState(cartItems);
    const [couponChecked, setCouponChecked] = useState<CouponState[]>([]);

    return (
        <>
            <Layout>
                {cartItems.length === 0 ? (
                    <EmptyData />
                ) : (
                    <>
                        <CartItemList
                            cartCheckedItems={cartCheckedItems}
                            setCartCheckedItems={setCartCheckedItems}
                            setCouponChecked={setCouponChecked}
                        />
                        <CouponList
                            couponChecked={couponChecked}
                            setCouponChecked={setCouponChecked}
                            cartItems={cartCheckedItems}
                        />
                    </>
                )}
            </Layout>
            <TotalPriceBar
                cartCheckedItems={cartCheckedItems}
                couponChecked={couponChecked}
            />
        </>
    );
}
