import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children } : { children: ReactNode }) {
    return (
        <div>
            <nav>
                <Link className="navbar-brand" href="/">Mon Portfolio</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" href="/about">A propos</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/projects">Projets</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li> 
                    </ul>
                </div>
            </nav>
            <main className="container mt-4">{children}</main>
        </div>
    );
} 