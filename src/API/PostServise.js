import axios from "axios";

const PostServise = {
    async getAll() {
        try {
            const respounse = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return respounse.data;
        } catch (e) {
            console.log(e);
        }
    },
};
export default PostServise;
