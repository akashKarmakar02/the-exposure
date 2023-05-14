"use client";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function Carousel({ params: { id } }: Props) {
  const query = groq`
    *[_type=="post" && _id=='${id}'][0] {
      ...,
      author->,
      categories[]->
    }
  `;

  const post = await client.fetch(query);
  console.log(post.mainImage.asset);
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        // onClick={closeModal}
      >
        <Image
          src={urlForImage(post.mainImage.asset).url()}
          className="pointer-events-none h-full w-full"
          alt="blurred background"
          priority={true}
        />
      </button>
    </div>
  );
}
