import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-8 py-[20px] text-black/80">
            <Link to="/" className="text-[30px] font-bold">
                MyPlog
            </Link>
            <nav className="flex items-center gap-4 text-[20px]">
                <Link to="/login" className="hover:text-black hover:underline">
                    LogIn
                </Link>
                <Link
                    to="/register"
                    className="hover:text-black hover:underline"
                >
                    Register
                </Link>
            </nav>
        </div>
    );
};

export default Header;
