import Container from "@/components/ui/container";
import { H2, H3, P } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import {
  Accessibility,
  Paintbrush,
  SearchCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const features = [
  {
    title: "SEO-Ready",
    description:
      "Every block is built with Next.js in mind, server-side rendered for speed and search engine visibility.",
    badge: "SSR",
    icon: <SearchCheck />,
  },
  {
    title: "Accessible",
    description:
      "No more half-baked components. Every block follows accessibility best practices so everyone can use your site.",
    badge: "WCAG 2.1",
    icon: <Accessibility />,
  },
  {
    title: "Stand-Out Design",
    description:
      "Shad Blocks brings fresh, modern designs inspired by real designers — perfect if you want your site to stand out.",
    badge: "MIT License",
    icon: <WandSparkles />,
  },
  {
    title: "100% Free. No Paywalls. Ever.",
    description:
      "No paywalls. No hidden costs. Get professional-quality marketing blocks without spending a cent.",
    badge: "2024 Design",
    icon: <Sparkles />,
  },
  {
    title: "Easy to Customize",
    description:
      "Built on top of Shadcn UI and Tailwind CSS, every block is composable, tweakable, and ready to match your brand in minutes.",
    badge: "Flexible",
    icon: <Paintbrush />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="mb-16">
      <Container className="grid grid-cols-1 gap-6 rounded-2xl border p-6 lg:grid-cols-3">
        <div className="relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border p-6">
          <H2 className="mb-4 text-4xl font-black md:text-6xl">
            Why <br /> Shad <br /> Blocks?
          </H2>
          <P className="text-muted-foreground">
            Built for developers who want beautiful, accessible, and performant
            components without the hassle.
          </P>

          <img
            src="https://images.pexels.com/photos/7946554/pexels-photo-7946554.jpeg"
            alt=""
            className="absolute top-0 right-0 -z-10 h-full w-full object-cover blur-sm grayscale filter"
          />
        </div>

        <div className="col-span-1 flex flex-col gap-6 p-6 lg:col-span-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-b pb-6 last:border-b-0 last:pb-0"
            >
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>
              <H3 className="mb-4">{feature.title}</H3>
              <P>{feature.description}</P>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
