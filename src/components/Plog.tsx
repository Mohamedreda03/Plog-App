const Plog = () => {
    return (
        <div className="flex gap-8 items-center">
            <div className="flex-[0.8]">
                <img
                    src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                    className="rounded-lg"
                />
            </div>
            <div className="flex-[1.2]">
                <div className="my-[15px] font-semibold flex gap-4">
                    <span>Auther</span>
                    <span className="text-black/50">July 2, 2020</span>
                </div>
                <h2 className="text-[40px] leading-[50px] font-semibold">
                    Your most unhappy customers are your greatest source of
                    learning.
                </h2>

                <p className="mt-[10px] font-semibold text-[16px] text-black/50">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </p>
            </div>
        </div>
    );
};

export default Plog;
