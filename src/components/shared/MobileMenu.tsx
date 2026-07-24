import { useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone } from "lucide-react";

const ALL_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setIsOpen((v) => !v)}
        className="h-9 w-9 flex items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[1100]">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background p-6 shadow-lg flex flex-col gap-4">
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-2 flex flex-col gap-4">
                {ALL_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="tel:8565880580"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-2.5 rounded-md"
                  >
                    <Phone className="h-4 w-4" /> (856) 588-0580
                  </a>
                </div>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
