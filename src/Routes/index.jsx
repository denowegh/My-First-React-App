import About from "../pages/About";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: "/About", element: <About /> },
    { path: "/Posts/:id", element: <Post /> },
    { path: "/Posts", element: <Posts /> },
    { path: "/", element: <Posts /> },
];

export const publicRoutes = [{ path: "/Login", element: <Login /> }];
