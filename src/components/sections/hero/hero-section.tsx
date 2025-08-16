import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { H1, H3 } from "@/components/ui/typography";
import Image from "next/image";
import tw from "@/assets/icons/tw.svg";
import next from "@/assets/icons/next.svg";
import gsap from "@/assets/icons/gsap.svg";
import shadcn from "@/assets/icons/shadcn.svg";
import ts from "@/assets/icons/ts.svg";

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
    <section className="mx-4 mb-4 flex h-[calc(100svh-100px)] max-h-[1240px] flex-col overflow-hidden rounded-2xl border py-16">
      <Container className="relative z-10 flex h-fit flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <H1 className="text-4xl lg:text-6xl">
            Shad
            <span className="bg-gradient-to-b from-[#000000] to-[#666666] bg-clip-text text-transparent">
              cn
            </span>{" "}
            marketing Blocks
          </H1>
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

        <div className="bg-border h-40 w-[1px]"></div>
        <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-[100px] bg-gradient-to-r from-pink-100/20 via-pink-50/20 to-pink-600/20 blur-3xl [animation-duration:2s]" />
        <div className="absolute top-1/2 left-1/2 -z-20 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-[80px] bg-gradient-to-r from-gray-100/30 via-gray-200/30 to-gray-50/30 blur-2xl [animation-duration:2s]" />
      </Container>
    </section>
  );
}
