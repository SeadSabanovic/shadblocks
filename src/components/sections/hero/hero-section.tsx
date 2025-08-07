import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/container";
import { H1, H3 } from "@/components/ui/typography";
import Image from "next/image";
import tw from "@/assets/icons/tw.svg";
import next from "@/assets/icons/next.svg";
import motion from "@/assets/icons/motion.svg";
import shadcn from "@/assets/icons/shadcn.svg";

const avatarImages = [
  {
    src: "https://images.pexels.com/photos/2475138/pexels-photo-2475138.jpeg",
    alt: "User avatar 1",
  },
  {
    src: "https://images.pexels.com/photos/6337258/pexels-photo-6337258.jpeg",
    alt: "User avatar 2",
  },
  {
    src: "https://images.pexels.com/photos/1727659/pexels-photo-1727659.jpeg",
    alt: "User avatar 3",
  },
];

export default function HeroSection() {
  return (
    <section className="mx-4 mb-4 flex h-[calc(100svh-100px)] max-h-[1240px] flex-col rounded-2xl bg-gray-50 py-16">
      <Container className="flex h-full flex-1 flex-col justify-center gap-4">
        {/* Hero content will go here */}
        <H1 className="text-6xl lg:text-7xl">
          Human-made
          <em className="mr-1">Shad</em>cn marketing <em>Blocks</em> for your
          <span className="ml-5 inline-flex">
            {avatarImages.map((avatar, index) => (
              <img
                key={avatar.src}
                src={avatar.src}
                alt={avatar.alt}
                className={`bg-background size-14 rounded-full border object-cover p-1 ${
                  index > 0 ? `translate-x-[-${index * 10}px]` : ""
                }`}
              />
            ))}
          </span>
          Next project
        </H1>
        <H3 className="uppercase">Accessible. SEO friendly. Free forever.</H3>
        <Badge
          variant="outline"
          className="bg-background flex items-center gap-2 px-4 py-2"
        >
          <Image width={24} height={24} src={tw} alt="Tailwind CSS" />
          <span className="bg-muted h-9 w-[2px]" />
          <Image width={24} height={24} src={shadcn} alt="shadcn/ui" />
          <span className="bg-muted h-9 w-[2px]" />
          <Image width={24} height={24} src={next} alt="Next.js" />
          <span className="bg-muted h-9 w-[2px]" />
          <Image width={30} height={24} src={motion} alt="Motion" />
        </Badge>
      </Container>
    </section>
  );
}
