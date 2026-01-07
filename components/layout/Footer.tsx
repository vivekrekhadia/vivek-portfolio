import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm text-center">
            Copyright &#169; {new Date().getFullYear()} Vivek Rekhadia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
