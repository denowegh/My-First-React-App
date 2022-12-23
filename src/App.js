import React, { useEffect, useState } from "react";
import PostServise from "./API/PostServise";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/Button/MyButton";
import Myh1 from "./components/Ui/h1/Myh1";
import Loader from "./components/Ui/Loader/Loader";
import MyModal from "./components/Ui/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { useSortedAndSelectedPosts } from "./hooks/usePosts";

import "./styles/App.css";

function App() {
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
    const [visible, setVisible] = useState(false);
    const [fetching, isLoading, ErrorLoading] = useFetching(async () => {
        setPosts(await PostServise.getAll());
    });

    useEffect(() => {
        fetching();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    };
    const remove = (delPost) => {
        setPosts(posts.filter((e) => e.id !== delPost.id));
    };

    return (
        <div className="App">
            <MyButton onClick={setVisible}>Создать пост</MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter
                searchQuaryAndGlobal={searchQuaryAndGlobal}
                setSearchQuaryAndGlobal={setSearchQuaryAndGlobal}
            />
            {ErrorLoading && (
                <Myh1>Не удалось загрузить посты: ${ErrorLoading}</Myh1>
            )}

            {isLoading ? (
                <div className="loaderCenter">
                    <Loader />
                </div>
            ) : (
                <PostList
                    remove={remove}
                    posts={sortedAndSelectedPosts}
                    title="Title"
                />
            )}
        </div>
    );
}

export default App;
