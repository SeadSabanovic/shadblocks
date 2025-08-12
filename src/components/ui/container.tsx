import { cn } from "@/lib/utils";

export default function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div {...props} className={cn("container mx-auto px-4", className)} />;
}
