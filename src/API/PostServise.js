import axios from "axios";

const PostServise = {
    async getAll(Limit = 10, page = 1) {
        const respounse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    _limit: Limit,
                    _page: page,
                },
            }
        );
        return respounse;
    },
    async getById(Id) {
        const respounse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/` + Id
        );
        return respounse;
    },
    async getByIdComents(Id) {
        const respounse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/` + Id + "/comments"
        );
        return respounse;
    },
};
export default PostServise;
