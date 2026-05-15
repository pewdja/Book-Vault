import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BookMarked, Search, Info, Library, PlusCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onSearchChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Discovery", icon: Search },
    { path: "/library", label: "My Library", icon: Library },
    { path: "/add", label: "Add Book", icon: PlusCircle },
    { path: "/about", label: "About", icon: Info },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-brand-stone/10 px-4 flex items-center justify-between z-60">
        <div className="flex items-center gap-2">
          <BookMarked size={24} className="text-brand-amber" />
          <span className="font-serif font-bold text-xl italic">Book Vault</span>
        </div>
        <button onClick={toggleMenu} className="p-2 text-brand-stone">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-51 lg:hidden"
          />
        )}
      </AnimatePresence>

      
      <aside
        className={`fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-brand-stone/10 p-6 z-55 flex flex-col shadow-sm transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <NavLink to="/" className="hidden lg:flex items-center gap-2 text-brand-stone hover:text-brand-amber transition-colors mb-10 px-2">
          <BookMarked size={32} className="text-brand-amber" />
          <span className="font-serif font-bold text-2xl tracking-tight italic">Book Vault</span>
        </NavLink>

        <div className="relative mb-8 px-2 mt-16 lg:mt-0">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-stone/40" size={18} />
          <input
            type="text"
            placeholder="Search library..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-brand-stone/5 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-brand-amber/20 transition-all outline-none"
          />
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive ? "text-brand-amber" : "text-brand-stone hover:bg-brand-stone/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-brand-amber/10 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto px-4 py-6 bg-brand-cream rounded-2xl text-center border border-brand-stone/5">
          <p className="text-[10px] text-brand-stone/50 font-medium leading-relaxed italic">
            "A library is not a luxury but one of the necessities of life."
          </p>
          <p className="text-[10px] text-brand-stone/50 font-medium mt-2">- Henry Ward Beecher</p>
        </div>
      </aside>
    </>
  );
}