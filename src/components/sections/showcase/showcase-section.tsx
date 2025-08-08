import Container from "@/components/ui/container";
import { H2, H4, P } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blockCategories = [
  {
    name: "Navigation",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    blockCount: 6,
  },
  {
    name: "Hero",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    blockCount: 6,
  },
  {
    name: "Call To Action",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    blockCount: 6,
  },
  {
    name: "Features",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    blockCount: 4,
  },
  {
    name: "Testimonials",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    blockCount: 4,
  },
  {
    name: "Pricing",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    blockCount: 4,
  },
  {
    name: "Forms",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    blockCount: 5,
  },
  {
    name: "Content Sections",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    blockCount: 5,
  },
  {
    name: "Team",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    blockCount: 3,
  },
  {
    name: "Gallery",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    blockCount: 4,
  },
  {
    name: "Logos",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    blockCount: 3,
  },
  {
    name: "Footers",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    blockCount: 4,
  },
];

export default function ShowcaseSection() {
  return (
    <section className="mx-4 mb-4 rounded-2xl py-16">
      <Container>
        <div className="mb-12 text-center">
          <H2 className="mb-4">Ready-to-Use Blocks</H2>
          <P className="text-muted-foreground mx-auto max-w-2xl">
            Choose from our collection of pre-built, customizable blocks to
            accelerate your development.
          </P>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blockCategories.map((category) => (
            <Card
              key={category.name}
              className="group relative gap-0 overflow-hidden border p-0 transition-all duration-300"
            >
              <CardHeader className="flex items-center gap-4 p-2!">
                <div className="flex items-center justify-start space-x-1.5">
                  <span className="bg-muted size-3 rounded-full" />
                  <span className="bg-muted size-3 rounded-full" />
                  <span className="bg-muted size-3 rounded-full" />
                </div>
                <H4 className="text-md bg-muted text-muted-foreground flex-1 rounded-md px-2 py-1 text-right font-mono text-sm">
                  {category.name}
                </H4>
                <Badge
                  variant="outline"
                  className="bg-card/50 absolute right-2 bottom-2 z-10 text-xs backdrop-blur-sm"
                >
                  {category.blockCount} blocks
                </Badge>
              </CardHeader>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Blocks
          </Button>
        </div>
      </Container>
    </section>
  );
}
