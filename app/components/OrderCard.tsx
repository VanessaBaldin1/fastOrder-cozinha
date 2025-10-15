import React from "react";
import styles from "./OrderCard.module.css";

// Tipagem dos itens e mesa
interface OrderItemType {
  id: number;
  item_nome: string;
  quantidade: number;
  preco: number;
  status: string;
  tempo_preparo: number;
  created_at: string;
}

interface Mesa {
  mesa_id: number | string;
  pedido_uuid: string; // adiciona aqui
  itens: OrderItemType[];
}

interface OrderCardProps {
  mesa: Mesa;
}

const OrderCard: React.FC<OrderCardProps> = ({ mesa }) => {
  return (
    <div className={styles.card}>
      {/* Cabeçalho */}
      <div className={styles.cardHeader}>
        <div className={styles.headerInfo}>
          <span className={styles.tableName}>Mesa {mesa.mesa_id}</span>
        </div>
        <span className={styles.orderNumber}>Pedido #{mesa.pedido_uuid}</span>
      </div>

      {/* Lista de itens */}
      <div className={styles.itemsList}>
        {mesa.itens.map((item) => {
          const data = new Date(item.created_at);
          const horaFormatada = data.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div key={item.id}>
              {item.quantidade}x {item.item_nome} - R${item.preco.toFixed(2)} -{" "}
              {horaFormatada}
            </div>
          );
        })}
      </div>

      {/* Botão */}
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.buttonPronto}`}>
          PRONTO
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
