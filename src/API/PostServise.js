import axios from "axios";

const PostServise = {
    async getAll() {
        const respounse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return respounse.data;
    },
};
export default PostServise;
