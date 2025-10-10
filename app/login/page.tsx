import Link from "next/link";
import styles from './Login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>PizzariaM</h1>
        <h2 className={styles.subtitle}>Acesso ao Sistema</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Usuário
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="seu.usuario"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={styles.input}
              placeholder="••••••••"
            />
          </div>
          <div>
            <Link href="/kitchen" passHref>
               <button type="submit" className={styles.button}>
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}