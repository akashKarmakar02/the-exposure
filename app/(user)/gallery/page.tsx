import Options from "@/components/Options";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->,
  }
`;

const categoryQuery = groq`
  *[_type=="category"] {
    ...,
  }
`;

export default async function gallery() {
  const posts: Post[] = await client.fetch(query);
  const categories = await client.fetch(categoryQuery);

  return (
    <div>
      <Options categories={categories} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-10  pb-24">
        {posts.map((post) => {
          return (
            <Image
              alt={post.title}
              key={post._id}
              className="transform  sm:brightness-100 rounded-lg md:brightness-90 transition will-change-auto hover:brightness-100 hover:drop-shadow-lg cursor-zoom-in"
              style={{ transform: "translate3d(0, 0, 0)" }}
              // @ts-ignore
              src={urlForImage(post.mainImage.asset).url()}
              height={1000}
              width={650}
            />
          );
        })}
      </div>
    </div>
  );
}

export const revalidate = 0;
