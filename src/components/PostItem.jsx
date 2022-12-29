import React from "react";
import MyButton from "./Ui/Button/MyButton";
import { useNavigate } from "react-router-dom";
const PostItem = function (props) {
    const delPost = () => {
        props.remove(props.post);
    };
    const router = useNavigate();
    return (
        <div className="post">
            <div className="post_info">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton
                    onClick={() => {
                        router(`/posts/${props.post.id}`);
                    }}
                >
                    Открыть
                </MyButton>
                <MyButton onClick={delPost}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
