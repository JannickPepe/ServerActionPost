'use client'

import { deletePost } from "@/actions/postServerActions";
import { Post } from "@prisma/client";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const DeletePost = ({ post }: { post: Post }) => {

    return (
        <>
        </>
    );
}

export default DeletePost;