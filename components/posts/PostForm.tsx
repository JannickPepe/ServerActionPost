'use client';

import { PostSchema, PostSchemaType } from "@/schemas/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormField from "../form/FormField";
import { useEffect, useState } from "react";
import Button from "../form/Button";
import { BiArrowFromLeft } from "react-icons/bi";
import { cn } from "@/lib/utils";
import Header from "../common/Header";
import { createPost, editPost } from "@/actions/postServerActions";
import { Post } from "@prisma/client";


const PostForm = ({ post, handleCloseEditing }: { post?: Post, handleCloseEditing?: () => void }) => {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<string | undefined>('')
    const [error, setError] = useState<string | undefined>('')

    const {register, handleSubmit, reset, formState:{errors}} = useForm<PostSchemaType>(
        {
            resolver: zodResolver(PostSchema)
        }  
    );

    const onSubmit: SubmitHandler<PostSchemaType> = (data) => {
        
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col max-w-[500px] m-auto mt-8", post && 'mt-0')}>

            <Header title={post ? "Edit Post" : "Create Post"} lg />
            <FormField id="title" register={register} errors={errors} placeholder="Title" disabled={loading} />

            <Button label={loading ? "Submitting..." : "Submit"} disabled={loading} icon={loading ? undefined : BiArrowFromLeft} />
        </form>
    );

}

export default PostForm;