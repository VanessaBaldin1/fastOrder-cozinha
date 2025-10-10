"use client"; // Necessário para usar hooks como o usePathname

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importe o hook
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname(); // Pega a rota atual (ex: "/kitchen")

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              href="/kitchen"
              className={
                pathname === "/kitchen" ? styles.activeLink : styles.navLink
              }
            >
              Monitor de Produção
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
