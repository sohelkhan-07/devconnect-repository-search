import { Link } from "react-router-dom";
import { LibraryBig, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="h-16 w-full border-b border-[#E4E1EA] bg-[#FFFBFE] px-6 select-none">
      <div className="mx-auto flex h-full items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#25232A]"
          onClick={closeMenu}
        >
          <LibraryBig size={24} strokeWidth={2} />

          <span className="text-lg font-semibold tracking-tight">
            Repository Explorer
          </span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="font-medium text-[#706B78] transition-colors hover:text-[#25232A]"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://github.com/sohelkhan-07"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#706B78] transition-colors hover:text-[#25232A]"
          >
            My GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded-md p-2 text-[#656D76] transition-colors hover:bg-[#F3F1F5] sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 sm:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-3/5 max-w-xs bg-[#F3F1F5] text-[#25232A] shadow-xl transition-transform duration-300 ease-out sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-end p-5">
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-md p-2 text-[#656D76] transition-colors hover:bg-[#E8E5EA]"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-1 px-5 text-lg">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 font-medium transition-colors hover:bg-[#E8E5EA]"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://github.com/sohelkhan-07"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-md px-3 py-2 font-medium transition-colors hover:bg-[#E8E5EA]"
          >
            My GitHub
          </a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
