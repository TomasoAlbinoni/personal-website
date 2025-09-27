'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="burger">
                <span></span><span></span><span></span>
            </label>
            <div className="menu">
                <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
                <Link className={pathname === "/projects" ? "active" : ""} href="/projects">Projects</Link>
                <Link className={pathname === "/feedback" ? "active" : ""} href="/feedback">Feedback</Link>
                <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact</Link>
            </div>
        </nav>
    );
};