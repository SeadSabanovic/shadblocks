import Container from "@/components/ui/container";
import { H2, H4, P } from "@/components/ui/typography";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import Image from "next/image";

const blockCategories = [
  {
    name: "Navigation",
    image: "/images/blocks/navigation.svg",
    blockCount: 6,
  },
  {
    name: "Hero",
    image: "/images/blocks/hero.svg",
    blockCount: 6,
  },
  {
    name: "Call To Action",
    image: "/images/blocks/cta.svg",
    blockCount: 6,
  },
  {
    name: "Features",
    image: "/images/blocks/features.svg",
    blockCount: 4,
  },
  {
    name: "Testimonials",
    image: "/images/blocks/testimonials.svg",
    blockCount: 4,
  },
  {
    name: "Pricing",
    image: "/images/blocks/pricing.svg",
    blockCount: 4,
  },
  {
    name: "Forms",
    image: "/images/blocks/forms.svg",
    blockCount: 5,
  },
  {
    name: "Content",
    image: "/images/blocks/content.svg",
    blockCount: 5,
  },
  {
    name: "Team",
    image: "/images/blocks/team.svg",
    blockCount: 3,
  },
];

export default function ShowcaseSection() {
  return (
    <section className="mx-4 mb-4 rounded-2xl py-16">
      <Container className="flex items-center gap-12">
        <div className="mb-12 max-w-2xl text-center">
          <H2 className="mb-4 text-4xl font-black whitespace-nowrap md:text-6xl">
            Ready-to-Use!
          </H2>
          <P className="text-muted-foreground mx-auto max-w-2xl">
            Choose from our collection of pre-built, customizable blocks to
            accelerate your development.
          </P>
          <Button size="lg" variant="outline" className="mt-6 text-center">
            View All Blocks
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blockCategories.map((category) => (
            <Card
              key={category.name}
              className="group relative gap-0 overflow-hidden border p-0 transition-all duration-300"
            >
              <CardHeader className="flex items-center gap-4 p-2!">
                <div className="flex items-center justify-start space-x-1.5">
                  <span className="size-3 rounded-full bg-gray-50" />
                  <span className="size-3 rounded-full bg-gray-50" />
                  <span className="size-3 rounded-full bg-gray-50" />
                </div>
                <H4 className="text-md flex-1 rounded-md bg-gray-50 px-2 py-1 text-right font-mono text-sm">
                  {category.name}
                </H4>
              </CardHeader>
              <Badge
                variant="outline"
                className="bg-card/70 absolute right-2 bottom-2 z-10 text-sm backdrop-blur-sm"
              >
                <Blocks />
                {category.blockCount} blocks
              </Badge>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  width={1600}
                  height={900}
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
