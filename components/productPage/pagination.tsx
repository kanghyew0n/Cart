import styled from "@emotion/styled";
import ReactPaginate from "react-paginate";
import usePaging from "../../store/pageInfoStore";

type TotalItemProps = {
    totalItemNum: number;
};

export const Pagination = (props: TotalItemProps) => {
    const { pageInfo, setPageInfo } = usePaging();

    const changePage = (e: any) => {
        setPageInfo(e.selected + 1);
    };

    return (
        <PaginationContainer>
            <ReactPaginate
                pageCount={props.totalItemNum / 4}
                pageRangeDisplayed={3}
                marginPagesDisplayed={0}
                previousLabel={"이전"}
                nextLabel={"다음"}
                onPageChange={changePage}
                containerClassName={"paginationGroup"}
                previousClassName={
                    pageInfo === 1 ? "withoutPrevButton" : "prevButton"
                }
                nextClassName={
                    pageInfo === 3 ? "withoutNextButton" : "nextButton"
                }
            />
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 64px 0;
    cursor: pointer;

    .paginationGroup {
        display: flex;
        gap: 16px;
    }

    .withoutPrevButton,
    .withoutNextButton {
        opacity: 0;
    }
`;

