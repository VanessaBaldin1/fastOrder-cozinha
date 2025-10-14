"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
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
        <button className={styles.logoutButton} onClick={handleLogout}>
          <LogOut size={18} strokeWidth={2} />
          <span>Sair</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
