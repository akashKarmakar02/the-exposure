import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->,
  }
`;

export default async function gallery() {
  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
      {posts.map((post: any) => {
        console.log(post.mainImage.asset);
        return (
          <div
            key={post._id}
            className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out"
          >
            <Image
              alt="Next.js Conf photo"
              className="transform sm:brightness-100 rounded-lg md:brightness-90 transition will-change-auto hover:brightness-100 hover:drop-shadow-lg cursor-zoom-in"
              style={{ transform: "translate3d(0, 0, 0)" }}
              src={urlForImage(post.mainImage.asset).url()}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              fill
            />
          </div>
        );
      })}
    </div>
  );
}
