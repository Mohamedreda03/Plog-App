import { format } from "date-fns";
import { Link } from "react-router-dom";

const Plog = ({ title, createdAt, summary, auther, image, _id }: any) => {
    return (
        <div className="flex gap-8 items-center flex-col md:flex-row">
            <Link to={`/post/${_id}`} className="md:flex-[0.8]">
                <img
                    src={"http://localhost:4000/" + image}
                    alt=""
                    className="rounded-lg md:h-[300px] object-cover w-full md:w-[600px]"
                />
            </Link>
            <Link to={`/post/${_id}`} className="md:flex-[1.2]">
                <div className="my-[15px] font-semibold flex gap-4">
                    <span>{auther.userName}</span>
                    <span className="text-black/50">
                        {format(new Date(createdAt), "MMM d, yyyy HH:mm")}
                    </span>
                </div>
                <div className="text-[35px] md:text-[40px] leading-[50px] font-semibold">
                    {title}
                </div>

                <p className="mt-[10px] font-semibold text-[16px] text-black/50">
                    {summary}
                </p>
            </Link>
        </div>
    );
};

export default Plog;
