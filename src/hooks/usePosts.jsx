import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                return a[sort].localeCompare(b[sort]);
            });
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
};

export const useSortedAndSelectedPosts = (posts, sort, searchQuary) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(searchQuary.toLowerCase())
        );
    }, [searchQuary, sortedPosts]);
    return sortedAndSearchedPosts;
};
