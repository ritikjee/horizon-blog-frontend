import MaxWidthWrapper from "@/components/max-width-wrapper";

interface ContactCardProps {
  Logo: any;
  title: string;
  description: string;
}

function ContactPage() {
  return (
    <MaxWidthWrapper>
      <div>
        <div className="flex flex-col items-center justify-center  gap-8 ">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-5xl text-center">
            Get in Touch
          </h1>
          <h1 className="text-md text-center lg:px-20 w-[600px] ">
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </h1>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function ContactCard({ Logo, title, description }: ContactCardProps) {
  return (
    <>
      <div>{<Logo />}</div>

      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  );
}

export default ContactPage;
