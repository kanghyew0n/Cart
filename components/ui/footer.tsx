import styled from "@emotion/styled";
import { BREAK_POINT_PHONE } from "../../const";

export const Footer = () => {
    return (
        <FooterContainer>
            kanghyew0n
            <a
                href="https://github.com/kanghyew0n"
                target="_blank"
                rel="noreferrer"
            >
                github
            </a>{" "}
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    padding: 0 6rem;
    background-color: #f5f5f5;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-size: 14px;
    font-weight: 500;
    a {
      margin-left: 10px;
      color: #ff4800;
    }
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 0 1rem;
    }
`;
