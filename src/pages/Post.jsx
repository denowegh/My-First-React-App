import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostServise from "../API/PostServise";
import PostItem from "../components/PostItem";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/Ui/Loader/Loader";
import Myh1 from "../components/Ui/h1/Myh1";
const Post = function () {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchingPost, postIsLoading, errorPost] = useFetching(async () => {
        const post = await PostServise.getById(params.id);

        setPost(post.data);
    });
    const [Comments, setComments] = useState([]);
    const [fetchingComments, isCommentsLoading, errorComments] = useFetching(
        async () => {
            const comment = await PostServise.getByIdComents(params.id);
            const b = comment.data;
            const c = b.filter((e) => {
                let a = Comments.filter((t) => {
                    return e.id === t.id;
                });
                if (a.length > 0) {
                    return false;
                } else {
                    return true;
                }
            });
            const p = [...Comments, ...c];
            setComments([...p]);
        }
    );
    useEffect(() => {
        fetchingPost();

        fetchingComments();
    }, []);
    return (
        <div>
            <Myh1>Вы открыли страницу поста с ID = {params.id}</Myh1>
            {postIsLoading ? (
                <Loader />
            ) : (
                <div>
                    Id = {post.id} Title = {post.title}
                </div>
            )}
            {isCommentsLoading ? (
                <Loader />
            ) : (
                <div>
                    <Myh1>Коментарии</Myh1>
                    {Comments.map((e, i, ar) => {
                        return (
                            <div key={e.id} className="comments">
                                <h5>{e.email}</h5>
                                <div>{e.body}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Post;
