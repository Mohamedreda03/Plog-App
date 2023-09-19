const Login = () => {
    return (
        <form className="flex flex-col max-w-[350px] m-auto gap-6">
            <h1 className="text-[40px] font-semibold text-center mb-[30px]">
                Login
            </h1>
            <input
                type="text"
                placeholder="User Name"
                className="border-solid focus:scale-105 border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <input
                type="password"
                placeholder="Password"
                className="border-solid focus:scale-105 border-2 border-black/20 rounded-lg transition duration-150 py-[15px] px-[20px] focus:outline-none"
            />
            <button className="bg-black/80 rounded-lg hover:bg-black/70 hover:scale-105 transition duration-150 p-[15px] text-white">
                Login
            </button>
        </form>
    );
};

export default Login;
