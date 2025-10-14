import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Página Não Encontrada</h2>
      <p className={styles.message}>
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link href="/kitchen" className={styles.link}>
        Voltar para o Monitor
      </Link>
    </div>
  );
}
