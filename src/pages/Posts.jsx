import React, { useEffect, useState, useRef } from "react";
import PostServise from "../API/PostServise";
import Pagination from "../components/Pagination";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/Ui/Button/MyButton";
import Myh1 from "../components/Ui/h1/Myh1";
import Loader from "../components/Ui/Loader/Loader";
import MyModal from "../components/Ui/MyModal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { useSortedAndSelectedPosts } from "../hooks/usePosts";

import "../styles/App.css";
import { getPageCount } from "../utils/pages";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [searchQuaryAndGlobal, setSearchQuaryAndGlobal] = useState({
        sortGlobal: "",
        searchQuary: "",
    });

    const sortedAndSelectedPosts = useSortedAndSelectedPosts(
        posts,
        searchQuaryAndGlobal.sortGlobal,
        searchQuaryAndGlobal.searchQuary
    );
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [visible, setVisible] = useState(false);
    const [fetching, isLoading, ErrorLoading] = useFetching(async () => {
        const Postsloc = await PostServise.getAll(limit, page);

        setPosts([...posts, ...Postsloc.data]);
        const countTotal = Number(Postsloc.headers["x-total-count"]);
        setTotalPages(getPageCount(countTotal, limit));
    });
    const lastElement = useRef();

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetching();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    };
    const remove = (delPost) => {
        setPosts(posts.filter((e) => e.id !== delPost.id));
    };

    const cangePage = (e) => {
        setPage(e);
    };
    return (
        <div className="App">
            <div>
                <MyButton onClick={setVisible}>Создать пост</MyButton>
                <MyModal visible={visible} setVisible={setVisible}>
                    <PostForm create={createPost} />
                </MyModal>
                <PostFilter
                    searchQuaryAndGlobal={searchQuaryAndGlobal}
                    setSearchQuaryAndGlobal={setSearchQuaryAndGlobal}
                />
                {ErrorLoading && <Myh1>${ErrorLoading}</Myh1>}
                <PostList
                    remove={remove}
                    posts={sortedAndSelectedPosts}
                    title="Title"
                />
                <div ref={lastElement} />
                {isLoading && (
                    <div className="loaderCenter">
                        <Loader />
                    </div>
                )}
                <Pagination
                    totalPages={totalPages}
                    page={page}
                    cangePage={cangePage}
                />
            </div>
        </div>
    );
}

export default Posts;
