import Container from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      {/* Page header */}
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome back! Here&apos;s what&apos;s happening with your projects
        today.
      </p>
    </Container>
  );
}
