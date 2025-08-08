import Container from "@/components/ui/container";
import { H2, P } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Accessible Components",
    description:
      "Built with accessibility in mind, ensuring your components work for everyone.",
    badge: "WCAG 2.1",
    icon: "♿",
  },
  {
    title: "SEO Optimized",
    description:
      "Server-side rendering and optimized meta tags for better search engine visibility.",
    badge: "SEO Ready",
    icon: "🔍",
  },
  {
    title: "Free Forever",
    description:
      "No hidden costs or subscriptions. Use these blocks in your projects without limits.",
    badge: "MIT License",
    icon: "🆓",
  },
  {
    title: "Modern Design",
    description:
      "Clean, modern UI components that follow current design trends and best practices.",
    badge: "2024 Design",
    icon: "✨",
  },
  {
    title: "Easy Customization",
    description:
      "Highly customizable components that adapt to your brand and design system.",
    badge: "Flexible",
    icon: "🎨",
  },
  {
    title: "TypeScript Ready",
    description:
      "Full TypeScript support with proper type definitions and IntelliSense.",
    badge: "Type Safe",
    icon: "📘",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-4 mb-4 rounded-2xl bg-white py-16">
      <Container className="text-center">
        <H2 className="mb-4">Why Choose ShadBlocks?</H2>
        <P className="text-muted-foreground mx-auto mb-12 max-w-2xl">
          Built for developers who want beautiful, accessible, and performant
          components without the hassle.
        </P>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-2xl">{feature.icon}</span>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
