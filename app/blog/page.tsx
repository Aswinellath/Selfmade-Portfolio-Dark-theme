import { client } from "@/lib/graphql";
import { GET_POSTS } from "@/lib/queries";
import Link from "next/link";

export default async function BlogPage() {
  const data: any = await client.request(GET_POSTS);
  // console.log(JSON.stringify(data, null, 2));
  return (
    <main className="max-w-5xl mx-auto py-28 px-6 text-white">

      <h1 className="text-4xl font-bold mb-16 text-center">
        Blog
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {data.posts.nodes.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            
            <div className="p-6 border border-neutral-800 rounded-xl hover:border-neutral-600 transition cursor-pointer bg-neutral-900">

              <h2 className="text-2xl font-semibold mb-3">
                {post.title}
              </h2>

              <div
                className="text-gray-400 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />

              <p className="mt-4 text-sm text-gray-500">
                Read article →
              </p>

            </div>

          </Link>
        ))}

      </div>
    </main>
  );
}