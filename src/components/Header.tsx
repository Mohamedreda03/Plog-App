import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContect } from "./Context";

const Header = () => {
    const { userLoged, setUserLoged }: any = useContext(userContect);
    // const [isLogout, setIsLogout]: any = useState(false);

    useEffect(() => {
        const user = window.localStorage.getItem("token");

        if (user) {
            setUserLoged(true);
        }
    }, []);

    const logout = () => {
        window.localStorage.removeItem("token");
        setUserLoged(false);
    };

    return (
        <div className="flex justify-between h-[80px] items-center mb-8 py-[20px] text-black/80">
            <Link to="/" className="font-bold">
                <img src="/logo.png" alt="" className="h-[55px]" />
            </Link>
            {userLoged ? (
                <nav className="flex items-center gap-4 text-[20px]">
                    <Link
                        to={"/createpost"}
                        className="hover:text-black hover:underline"
                    >
                        Create Post
                    </Link>
                    <Link
                        to={"/"}
                        onClick={logout}
                        className="hover:text-black hover:underline cursor-pointer"
                    >
                        Logout
                    </Link>
                </nav>
            ) : (
                <nav className="flex items-center gap-4 text-[20px]">
                    <Link
                        to="/login"
                        className="hover:text-black hover:underline"
                    >
                        LogIn
                    </Link>
                    <Link
                        to="/register"
                        className="hover:text-black hover:underline"
                    >
                        Register
                    </Link>
                </nav>
            )}
        </div>
    );
};

export default Header;
