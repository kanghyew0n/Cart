import styled from "@emotion/styled";
import { CouponState } from "../../types/coupons";

type CouponProps = {
    coupon: CouponState;
    checked: CouponState[];
    handleChange: (coupon: CouponState) => void;
};

const Coupon = (props: CouponProps) => {
    const {coupon, checked, handleChange} = props;
    return (
        <CouponContainer>
            <td className="checkbox">
                <input
                    type="checkbox"
                    checked={checked.includes(coupon) ? true : false}
                    onChange={() => handleChange(coupon)}
                />
            </td>
            <td className="couponName">{coupon.title}</td>
        </CouponContainer>
    );
};

const CouponContainer = styled.tr`
    td {
        border-bottom: 1px solid #eee;
        padding: 16px 32px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .checkbox {
        border-right: 1px solid #eee;
    }
`;

export default Coupon;
