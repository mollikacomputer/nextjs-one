import { useRouter } from "next/router";

const blogId = () => {
    const router = useRouter();
    const id = router.query.blogId;
    return (
        <div>
            <h2 className="text-3xl"> Blog info for this id {id} </h2>
        </div>
    );
};

export default blogId;