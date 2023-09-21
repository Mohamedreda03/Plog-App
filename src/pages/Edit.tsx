import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

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

const Edit = () => {
    const { postId }: any = useParams();
    const [post, setPost]: any = useState({
        title: "",
        summary: "",
        image: null,
        content: "",
    });
    const [isLoading, setIsLoading]: any = useState(true);

    // const [title, setTitle]: any = useState("");
    // const [summary, setSummary]: any = useState("");
    // const [image, setImage]: any = useState("");
    // const [content, setContent]: any = useState("");

    const [redirect, setRedirect]: any = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
        data.set("title", post.title);
        data.set("summary", post.summary);
        data.set("content", post.content);

        if (post.image?.[0]) {
            data.set("image", post.image?.[0]);
        }

        try {
            await axios
                .patch(
                    `https://plog-app-api.onrender.com/api/users/post/${postId}`,
                    data
                )
                .then(() => {
                    setRedirect(true);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const postfunc = async () => {
            try {
                await axios
                    .get(
                        `https://plog-app-api.onrender.com/api/users/post/${postId}`
                    )
                    .then((response) => response.data.data)
                    .then((data) => {
                        setPost(data);
                        setIsLoading(false);
                        console.log(data);
                        setPost({
                            title: data.title,
                            summary: data.summary,
                            image: null,
                            content: data.content,
                        });
                    });
            } catch (error) {
                console.log(error);
            }
        };
        postfunc();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center h-[600px] items-center">
                <div className="typing-indicator">
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-circle"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                    <div className="typing-shadow"></div>
                </div>
            </div>
        );
    }

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
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Title"
                className="border-solid focus:scale-[1.015] border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input
                type="summary"
                value={post.summary}
                onChange={(e) => setPost({ ...post, summary: e.target.value })}
                placeholder="Summary"
                className="border-solid focus:scale-[1.015] border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input
                type="file"
                onChange={(e) => setPost({ ...post, image: e.target.files })}
            />
            <ReactQuill
                modules={modules}
                formats={formats}
                value={post.content}
                onChange={(newValue) => setPost({ ...post, content: newValue })}
                className="h-[600px] mb-10"
            />
            <button className="bg-black/80 rounded-lg hover:bg-black/70 hover:scale-[1.015] transition duration-150 p-[15px] text-white">
                Update Post
            </button>
        </form>
    );
};

export default Edit;
