import styled from "@emotion/styled";
import { Header } from "./header";
import { Footer } from "./footer";

type ChildrenProps = {
    children: React.ReactNode;
};

const Layout = (props: ChildrenProps) => {
    return (
        <>
            <Header />
            <Container>{props.children}</Container>
            {/* <Footer /> */}
        </>
    );
};

const Container = styled.div`
    padding: 0 6rem;
    padding-top: 82px;
`;

export default Layout;
