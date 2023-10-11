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
              <Image
                  alt="Next.js Conf photo"
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

export const revalidate = 300;