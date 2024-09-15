import Link from "next/link";
import PostShow from "@/app/components/posts/post-show";
import CommentList from "@/app/components/comments/comment-list";
import CommentCreateForm from "@/app/components/comments/comment-create-form";
import paths from "@/app/paths";
import { fetchCommentByPostId } from "@/app/db/queries/comments";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={()=>fetchCommentByPostId(postId)} />
    </div>
  );
}
