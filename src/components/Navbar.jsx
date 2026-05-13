import {NavLink} from "react-router-dom";
import { BookMarked, Search, Info, Library } from "lucide-react";
import { motion } from "motion/react";
 export default function Navbar() {
    const navItems = [
      { path: "/", label: "Discovery", icon: Search },
    { path: "/library", label: "My Library", icon: Library },
    { path: "/about", label: "About", icon: Info },
    ];
    return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-brand-stone/10 flex-col p-6 z-50 flex shadow-sm">
        <NavLink to="/" className="flex items-center gap-2 text-brand-stone hover:text-brand-amber transition-colors mb-10 px-2">
            <BookMarked size={32} className="text-brand-amber" />
            <span className="font-serif font-bold text-2xl tracking-tight italic">Book Vault</span>
        </NavLink>
        <div className="flex flex-col gap-4">
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        `relative flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            isActive ? "text-brand-amber" : "text-brand-stone hover:bg-brand-stone/5"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <item.icon size={20} />
                            <span>{item.name}</span>
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
        </div>
        <div className="mt-auto px-4 py-6 bg-brand-cream rounded-2xl text-center border border-brand-stone/5">
            <p className="text-xs text-brand-stone/50 font-medium leading-relaxed">
            "A library is not a luxury but one of the necessities of life."
            </p>
             <p className="text-xs text-brand-stone/50 font-medium mt-2">
            - Henry Ward Beecher
            </p> 
        </div>
    </aside>
    )
 }


       