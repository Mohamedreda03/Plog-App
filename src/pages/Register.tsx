import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { userContect } from "../components/Context";

const Register = () => {
    const { userLoged, setUserLoged }: any = useContext(userContect);
    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    });
    // const [redirectUrl, setRedirectUrl] = useState(false);

    const [errorMsg, setErrorMsg] = useState(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://plog-app-api.onrender.com/api/users/register",
                userData
            );
            window.localStorage.setItem("token", response.data.data.token);
            setUserLoged(true);
            console.log(response.data);
        } catch (error: any) {
            console.error(error);
            setErrorMsg(error.message);
        }
    };

    if (userLoged) {
        return <Navigate to={"/"} />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[350px] m-auto gap-6"
        >
            <h1 className="text-[40px] font-semibold text-center mb-[30px]">
                Register
            </h1>
            <input
                value={userData.userName}
                onChange={(e) =>
                    setUserData({ ...userData, userName: e.target.value })
                }
                type="text"
                placeholder="User Name"
                className="border-solid focus:scale-105 border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input
                value={userData.password}
                onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                placeholder="Password"
                className="border-solid focus:scale-105 border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <button className="bg-black/80 rounded-lg hover:bg-black/70 hover:scale-105 transition duration-150 p-[15px] text-white">
                Register
            </button>
            {errorMsg && (
                <div className="text-center text-red-600 bg-red-300 py-3 rounded-lg">
                    password or email not valid
                </div>
            )}
        </form>
    );
};

export default Register;
