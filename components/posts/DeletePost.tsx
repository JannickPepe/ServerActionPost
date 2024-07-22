'use client'

import { deletePost } from "@/actions/postServerActions";
import { Post } from "@prisma/client";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { MdDelete } from "react-icons/md";


const DeletePost = ({ post }: { post: Post }) => {

    const [loading, setLoading] = useState(false)

    const handleDelete = async (post: Post) => {
        setLoading(true)
        const res = await deletePost(post)
        if (res.success) {
            console.log("Post deleted")
        } else {
            console.log("Error")
        }
        setLoading(false)
    }

    return (
        <button className="text-slate-500 hover:text-red-400" onClick={() => handleDelete(post)}>
            {!loading && <MdDelete size={20} />}
            {loading && <ImSpinner size={20} className="animate-spin" />}
        </button>
    );
}

export default DeletePost;