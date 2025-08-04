import { cn } from "@/lib/utils";

export default function Page({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-[calc(100svh-144px)]", className)}>
      {children}
    </div>
  );
}
