import React, { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/Button/MyButton";
import MyModal from "./components/Ui/MyModal/MyModal";
import { useSortedAndSelectedPosts } from "./hooks/usePosts";

import "./styles/App.css";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "a",
            body: "d",
        },
        { id: 2, title: "b", body: "c" },
        { id: 3, title: "c", body: "b" },
        { id: 4, title: "d", body: "a" },
    ]);
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

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    };
    const remove = (delPost) => {
        setPosts(posts.filter((e) => e.id !== delPost.id));
    };

    async function GetPosts() {}

    return (
        <div className="App">
            <MyButton onClick={GetPosts}>aaaaa</MyButton>
            <MyButton onClick={setVisible}>Создать пост</MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter
                searchQuaryAndGlobal={searchQuaryAndGlobal}
                setSearchQuaryAndGlobal={setSearchQuaryAndGlobal}
            />
            <PostList
                remove={remove}
                posts={sortedAndSelectedPosts}
                title="Title"
            />
        </div>
    );
}

export default App;
