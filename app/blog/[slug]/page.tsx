import { client } from "@/lib/graphql";
import { GET_POST } from "@/lib/queries";
import CodeCopy from "@/components/CodeCopy";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const data = await client.request(GET_POST, {
    slug: slug,
  });

  const post = data.post;
// console.log(post);
  return (
    <main className="max-w-3xl mx-auto py-28 px-6 text-white">
      <CodeCopy />
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      <div
        className="prose prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
