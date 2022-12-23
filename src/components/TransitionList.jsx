import React from "react";
import PostItem from "./PostItem";
import Myh1 from "./Ui/h1/Myh1";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TransitionList = function ({ post, index, remove }) {
    
    return (
        <CSSTransition
            key={post.id}
            timeout={300}
            classNames="post"
            nodeRef={nodeRef}
        >
            <PostItem
                ref={nodeRef}
                remove={remove}
                id={index + 1}
                post={post}
            />
        </CSSTransition>
    );
};
export default TransitionList;
