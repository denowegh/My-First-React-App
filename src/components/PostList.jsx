import React from "react";
import PostItem from "./PostItem";
import Myh1 from "./Ui/h1/Myh1";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = function ({ posts, title, remove }) {
    if (posts.length !== 0) {
        return (
            <div>
                <Myh1 style={{ textAlign: "center" }}>{title}</Myh1>

                <TransitionGroup>
                    {posts.map((post, index) => {
                        return (
                            <CSSTransition
                                key={post.id}
                                timeout={300}
                                classNames="post"
                            >
                                <PostItem
                                    remove={remove}
                                    id={index + 1}
                                    post={post}
                                />
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        );
    } else {
        return <Myh1>Постов нет </Myh1>;
    }
};

export default PostList;
