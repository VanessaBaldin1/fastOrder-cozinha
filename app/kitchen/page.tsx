import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import { mockOrders } from "../data/mockOrders";
import styles from './Kitchen.module.css';

export default function KitchenPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {mockOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
}