import React, { useEffect, useState } from "react";
import PostServise from "./API/PostServise";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/Button/MyButton";
import MyModal from "./components/Ui/MyModal/MyModal";
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

    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    };
    const remove = (delPost) => {
        setPosts(posts.filter((e) => e.id !== delPost.id));
    };

    async function getPosts() {
        setTimeout(async () => {
            setPosts(await PostServise.getAll());
            await setLoaded(false);
        }, 5000);
    }

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
            {loaded ? (
                <h1>Загрузка списка...</h1>
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
