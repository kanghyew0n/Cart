import create from "zustand";

type Page = {
    pageInfo: number;
    setPageInfo: (pageInfo: number) => void;
};

const usePaging = create<Page>((set) => ({
    pageInfo: 1,
    setPageInfo: (pageInfo: number) => set(() => ({ pageInfo })),
}));

export default usePaging;
