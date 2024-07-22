import Container from "@/components/layout/Container";
import { VanishList } from "@/components/NewList";
import ListPosts from "@/components/posts/ListPosts";
import PostForm from "@/components/posts/PostForm";


export default function Home() {

  return (
    <>
      <Container>
        <PostForm />
        <ListPosts />
      </Container>
      <VanishList />
    </>
  );

};
