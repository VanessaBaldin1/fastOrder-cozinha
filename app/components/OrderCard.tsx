import React from "react";
import { OrderType } from "../data/mockOrders";
import OrderItem from "./OrderItem";
import styles from "./OrderCard.module.css";

interface OrderCardProps {
  order: OrderType;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const getPositionSuffix = (position: number) => {
    return `${position}º`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.headerInfo}>
          <span className={styles.positionBadge}>
            {getPositionSuffix(order.position)}
          </span>
          <span className={styles.tableName}>{order.table}</span>
        </div>
        <span className={styles.orderNumber}>Ped {order.orderNumber}</span>
      </div>

      <div className={styles.itemsList}>
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.buttonPronto}`}>
          PRONTO
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
