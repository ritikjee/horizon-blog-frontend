import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ABOUT_CARD_DETAILS } from "@/lib/constants";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
}

function AboutPage() {
  return (
    <div>
      <MaxWidthWrapper className="pt-5 md:py-16">
        <div className="flex flex-col items-center justify-center  gap-8 ">
          <h1 className="text-zinc-500 font-medium text-lg">ABOUT US</h1>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-5xl text-center">
            Creative Blog Writting and publishing site
          </h1>
          <h1 className="text-md text-center lg:px-20">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </h1>
        </div>
        <div className="relative w-full h-[600px] my-10 ld:my-16 rounded-xl">
          <Image
            className="rounded-xl"
            fill
            src="https://utfs.io/f/79c429b0-f48f-4266-a1fd-140fafda875f-qcfrdt.png"
            alt="blogImage"
          />
        </div>
        <h6 className="text-zinc-500 dark:text-zinc-600 font-medium text-md py-3">
          HOW WE WORK
        </h6>

        <div className="relative pb-72 md:pb-36">
          <h3 className="text-4xl font-bold md:w-[50%] absolute inset-0">
            I will show you how our team works
          </h3>
          <h5 className="text-zinc-400 dark:text-zinc-500 md:w-[30%] absolute right-0 top-36 md:top-9 text-right ">
            Bring to the table win-win market strategies to ensure perfect
            articles.{" "}
          </h5>
        </div>

        <div className="grid grid-col-1 md:grid-cols-3 gap-3">
          {ABOUT_CARD_DETAILS.map((card) => (
            <AboutCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function AboutCard({ id, title, description }: Props) {
  return (
    <div className="hover:bg-primary p-5 group rounded-md hover:cursor-pointer">
      <h1 className="text-zinc-400 dark:text-zinc-800 text-7xl font-serif pb-2 group-hover:text-white">
        {id}
      </h1>
      <h5 className="text-2xl pb-3 text-primary font-bold group-hover:text-white">
        {title}
      </h5>
      <p className="text-justify">{description}</p>
    </div>
  );
}

export default AboutPage;
