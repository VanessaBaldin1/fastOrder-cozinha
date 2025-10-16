import Link from 'next/link';
import { HardHat } from 'lucide-react'; 
import styles from './maintenance.module.css';

const MaintenancePage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.panel}>
        <HardHat className={styles.icon} size={64} strokeWidth={1.5} />
        <h1 className={styles.title}>Página em Manutenção</h1>
        <p className={styles.subtitle}>
          Estamos trabalhando para implementar esta funcionalidade o mais rápido
          possível. Por favor, volte em breve!
        </p>
        <Link href="/kitchen" className={styles.backButton}>
          Voltar ao Painel
        </Link>
      </main>
    </div>
  );
};

export default MaintenancePage;