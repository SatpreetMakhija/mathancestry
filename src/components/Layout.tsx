import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Catalog" },
  { to: "/timeline", label: "Timeline" },
  { to: "/explore", label: "Explore" },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl" role="img" aria-label="math">
              &Sigma;
            </span>
            <span className="text-base sm:text-xl font-bold text-ink font-serif">
              MathAncestry
            </span>
          </NavLink>

          <nav className="flex gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-white"
                      : "text-muted hover:text-ink hover:bg-parchment"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        <div className="max-w-6xl mx-auto px-4">
          MathAncestry &mdash; Git Blame for Math Notation
        </div>
      </footer>
    </div>
  );
}
