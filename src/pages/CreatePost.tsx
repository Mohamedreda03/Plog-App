import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image", "video"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["clean"],
    ],
    clipboard: {
        matchVisual: false,
    },
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "video",
    "color",
    "background",
    "script",
];
const CreatePost = () => {
    const [redirect, setRedirect]: any = useState(false);
    const [title, setTitle]: any = useState("");
    const [summary, setSummary]: any = useState("");
    const [image, setImage]: any = useState("");
    const [content, setContent]: any = useState("");
    const token = window.localStorage.getItem("token");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("image", image[0]);
        data.set("content", content);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
                // Add other headers if needed
            },
        };

        try {
            await axios
                .post(
                    "https://plog-app-api.onrender.com/api/users/post",
                    data,
                    config
                )
                .then(() => {
                    setRedirect(true);
                });
        } catch (error) {
            console.log(error);
        }
    };

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[1000px] m-auto gap-8 py-[40px]"
        >
            <input
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border-solid focus:scale-[1.015] border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input
                type="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Summary"
                className="border-solid focus:scale-[1.015] border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input type="file" onChange={(e) => setImage(e.target.files)} />
            <ReactQuill
                modules={modules}
                formats={formats}
                value={content}
                onChange={(newValue) => setContent(newValue)}
                className="h-[600px] mb-10"
            />
            <button className="bg-black/80 rounded-lg hover:bg-black/70 hover:scale-[1.015] transition duration-150 p-[15px] text-white">
                Add Post
            </button>
        </form>
    );
};

export default CreatePost;
