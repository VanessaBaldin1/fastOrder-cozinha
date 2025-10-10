import React from 'react';
import { Clock } from 'lucide-react';
import { OrderItemType } from '../data/mockOrders';
import styles from './OrderItem.module.css';

interface OrderItemProps {
  item: OrderItemType;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemHeader}>
        <div className={styles.itemInfo}>
          <span className={styles.quantity}>{item.quantity}</span>
          <div>
            <p className={styles.name}>{item.name}</p>
            {item.details.map((detail, index) => (
              <p key={index} className={styles.details}>{detail}</p>
            ))}
          </div>
        </div>
        <div className={styles.tagsContainer}>
          {item.statusTags.map((tag, index) => (
             <span 
               key={index} 
               className={`${styles.statusTag} ${tag === 'P' ? styles.tagP : styles.tagE}`}
             >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.itemFooter}>
        <span className={styles.chefInfo}>&#x1F464; {item.chef}</span>
        <div className={styles.timer}>
          <Clock size={14} />
          <span>{item.startTime}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;