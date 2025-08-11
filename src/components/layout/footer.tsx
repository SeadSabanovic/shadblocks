import Container from "../ui/container";

export default function Footer() {
  return (
    <footer className="bg-background flex h-16 items-center justify-between border-t">
      <Container className="flex h-full items-center justify-between">
        <small className="text-muted-foreground">
          &copy; Shad Blocks. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}
