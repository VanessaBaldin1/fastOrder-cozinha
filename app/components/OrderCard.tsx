"use client";

import React, { useState, useEffect } from "react";
import styles from "./OrderCard.module.css";
import { Clock } from "lucide-react";
import { atualizarStatusPedido } from "../lib/ordersService";

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
  pedido_uuid: string;
  itens: OrderItemType[];
}

interface OrderCardProps {
  mesa: Mesa;
  onPedidoPronto: (pedidoUuid: string, mesaId: string | number) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ mesa, onPedidoPronto }) => {
  const TEMPO_TOTAL = 30 * 60;

  const [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL);
  const [headerClass, setHeaderClass] = useState(styles.green);

  const formatarTempo = (segundos: number) => {
    const m = Math.floor(segundos / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(segundos % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    const startTime = new Date(mesa.itens[0].created_at + "Z").getTime();

    const intervalId = setInterval(() => {
      const diffEmSegundos = Math.floor((Date.now() - startTime) / 1000);
      const restante = TEMPO_TOTAL - diffEmSegundos;

      setTempoRestante(restante > 0 ? restante : 0);

      if (restante > 20 * 60) {
        setHeaderClass(styles.green);
      } else if (restante > 10 * 60) {
        setHeaderClass(styles.yellow);
      } else {
        setHeaderClass(styles.red);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [mesa.itens]);

  return (
    <div className={styles.card}>
      <div className={`${styles.cardHeader} ${headerClass}`}>
        <span className={styles.tableName}>Mesa {mesa.mesa_id}</span>

        <div className={styles.timer}>
          <Clock size={16} />
          <span>{formatarTempo(tempoRestante)}</span>
        </div>

        <span className={styles.orderNumber}>
          #{mesa.pedido_uuid.substring(mesa.pedido_uuid.length - 8)}
        </span>
      </div>

      <div className={styles.itemsList}>
        {mesa.itens.map((item) => (
          <div key={item.id} className={styles.item}>
            <span className={styles.itemQuantidade}>{item.quantidade}x </span>
            <span className={styles.itemNome}>{item.item_nome}</span>
          </div>
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${styles.buttonPronto}`}
          onClick={async () => {
            await atualizarStatusPedido(mesa.pedido_uuid, "pronto");
            onPedidoPronto(mesa.pedido_uuid, mesa.mesa_id);
          }}
        >
          PRONTO
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
