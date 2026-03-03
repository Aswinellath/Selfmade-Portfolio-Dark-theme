export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-neutral-800">
      © {new Date().getFullYear()} ASWIN E. Built with Next.js & Tailwind.
    </footer>
  );
}