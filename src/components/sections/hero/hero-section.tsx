import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { H1, H3 } from "@/components/ui/typography";
import Image from "next/image";
import tw from "@/assets/icons/tw.svg";
import next from "@/assets/icons/next.svg";
import gsap from "@/assets/icons/gsap.svg";
import shadcn from "@/assets/icons/shadcn.svg";
import ts from "@/assets/icons/ts.svg";
import peep1 from "@/assets/images/peeps/peep1.svg";
import peep2 from "@/assets/images/peeps/peep2.svg";
import peep3 from "@/assets/images/peeps/peep3.svg";

const avatarImages = [
  {
    src: peep1,
    alt: "User avatar 1",
  },
  {
    src: peep2,
    alt: "User avatar 2",
  },
  {
    src: peep3,
    alt: "User avatar 3",
  },
];

const techIcons = [
  {
    src: tw,
    alt: "Tailwind CSS",
  },
  {
    src: shadcn,
    alt: "shadcn/ui",
  },
  {
    src: next,
    alt: "Next.js",
  },
  {
    src: ts,
    alt: "TypeScript",
  },
  {
    src: gsap,
    alt: "GSAP",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-4 mb-4 flex h-[calc(100svh-100px)] max-h-[1240px] flex-col overflow-hidden rounded-2xl border bg-gray-50 py-16">
      <Container className="z-10 grid h-fit grid-cols-12 grid-rows-5 flex-col justify-center gap-4">
        <div className="col-span-8 flex flex-col gap-4">
          <H1 className="text-4xl lg:text-6xl">Shadcn marketing Blocks</H1>
          <H3 className="uppercase">Accessible. SEO friendly. Free forever.</H3>
          <Badge
            variant="outline"
            className="bg-background flex items-center gap-2 px-4 py-2"
          >
            {techIcons.map((icon, index) => (
              <div key={icon.alt} className="flex items-center">
                <Image
                  width={24}
                  height={24}
                  src={icon.src}
                  alt={icon.alt}
                  className="aspect-square"
                />
                {index < techIcons.length - 1 && (
                  <span className="bg-muted ml-2 h-9 w-[2px]" />
                )}
              </div>
            ))}
          </Badge>
        </div>
      </Container>
    </section>
  );
}
