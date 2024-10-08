
import PostCreateForm from "@/app/components/posts/postCreateForm";
import PostList from "@/app/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/app/db/queries/posts";
interface TopicShowPageProps {
  params: {
    slug: string;
  }
}

function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  

  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className=" col-span-3">
      <h1 className="text-2xl font-bold mb-2">
       <PostList fetchData={()=>fetchPostsByTopicSlug(slug)} />
      </h1>
    </div>

    <div>
      <PostCreateForm slug={slug} />
    </div>
  </div>;
}

export default TopicShowPage;
