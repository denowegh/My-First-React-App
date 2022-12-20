import React from "react";
import MyInput from "./Ui/Input/MyInput";
import MyButton from "./Ui/Button/MyButton";
import { useState } from "react";
const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        };

        create(newPost);

        setPost({ title: "", body: "" });
    };

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста"
            />

            <MyButton onClick={addNewPost}>Someone</MyButton>
        </form>
    );
};

export default PostForm;
