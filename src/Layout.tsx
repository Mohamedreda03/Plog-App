import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
    return (
        <main className="max-w-[1300px] m-auto p-[20px]">
            <Header />
            <Outlet />
        </main>
    );
};

export default Layout;
