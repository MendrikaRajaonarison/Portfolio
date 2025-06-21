import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children } : { children: ReactNode }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <Link className="navbar-brand" href="/">Mon Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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