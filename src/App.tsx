import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import Edit from "./pages/Edit";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/createpost" element={<CreatePost />} />
                    <Route path="/post/:postId" element={<PostPage />} />
                    <Route path="/edit/:postId" element={<Edit />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
