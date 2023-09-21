import axios from "axios";
import Plog from "../components/Plog";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData]: any = useState("");
    const token = window.localStorage.getItem("token");
    const [isLoading, setIsLoading]: any = useState(true);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
            // Add other headers if needed
        },
    };
    useEffect(() => {
        const getAllPosts = async () => {
            try {
                await axios
                    .get(
                        "https://plog-app-api.onrender.com/api/users/post",
                        config
                    )
                    .then((res) => {
                        setData(res.data);
                        setIsLoading(false);
                    });
            } catch (error: any) {
                console.log(error.message);
            }
        };
        getAllPosts();
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

    return (
        <div className="flex flex-col gap-20 md:gap-10 pb-[40px] pt-[20px]">
            {data.length > 0 &&
                data.map((post: any) => <Plog key={post._id} {...post} />)}
        </div>
    );
};

export default Home;
