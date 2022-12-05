import styled from "@emotion/styled";
import { Header } from "./header";
import { Footer } from "./footer";
import { useRouter } from "next/router";
import { BREAK_POINT_PHONE } from "../../const";

type ChildrenProps = {
    children: React.ReactNode;
};

const Layout = (props: ChildrenProps) => {
    const router = useRouter();

    return (
        <>
            <Header />
            <Container>{props.children}</Container>
            {router.pathname !== "/cart" ? <Footer /> : ""}
        </>
    );
};

const Container = styled.div`
    padding: 0 6rem;
    padding-top: 82px;
    min-height: calc(100vh - 280px);
    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
        padding: 0 1rem;
        padding-top: 40px;
    }
`;

export default Layout;
