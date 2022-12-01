import styled from "@emotion/styled";
import { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <Container>{props.children}</Container>
            <Footer />
        </>
    );
};

const Container = styled.div`
    padding: 0 6rem;
    padding-top: 82px;
`;

export default Layout;
