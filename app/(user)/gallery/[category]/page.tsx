import Options from "@/components/Options";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";


const categoryQuery = groq`
  *[_type=="category"] {
    ...,
  }
`;

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    category->{slug},
  }
`;

type Props = {
  params: {
    category: string;
  };
};

export default async function gallery({ params: { category } }: Props) {
  const posts = await client.fetch(query);
  const categories = await client.fetch(categoryQuery);
  // @ts-ignore
    const categoryPosts = posts.filter(post => post.category.slug.current === category)

  return (
    <div>
      <Options categories={categories} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {categoryPosts.map((post: any) => {
          return (
            <div
              key={post._id}
              className="flex justify-center w-fit h-fit drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform  sm:brightness-100 rounded-lg md:brightness-90 transition will-change-auto hover:brightness-100 hover:drop-shadow-lg cursor-zoom-in"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={urlForImage(post.mainImage.asset).url()}
                height={720}
                width={1200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
