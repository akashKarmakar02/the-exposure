import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
      <article className={"px-10 py-20"}>
          <section className="space-y-5 mb-4 border border-[#f7550ae9] text-white">
              <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                  <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                      <Image
                          className="object-cover object-center mx-auto"
                          src="/owner.jpg"
                          alt="owner"
                          fill
                      />
                  </div>
                  <section className="bg-[#f7550ae9] w-full">
                      <div className="flex flex-col md:flex-row justify-start gap-y-5">
                          <div>
                              <Image
                                  src="/owner.jpg"
                                  alt="owner"
                                  height={240}
                                  width={480}
                              />
                          </div>
                          <div className="flex p-5 items-center space-x-2">
                              <AnimatedText />
                          </div>
                      </div>
                  </section>

              </div>
          </section>
      </article>
  );
}
