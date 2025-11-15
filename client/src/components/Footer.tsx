export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Solomon Oluwatosin. Built with passion on Replit.
        </p>
      </div>
    </footer>
  );
}
