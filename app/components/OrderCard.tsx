
"use client"; 

import React, { useState, useEffect } from "react"; 
import styles from "./OrderCard.module.css";
import { Clock } from "lucide-react"; 


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


function formatarTempo(totalSegundos: number): string {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = Math.floor(totalSegundos % 60);
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
}

const OrderCard: React.FC<OrderCardProps> = ({ mesa, onPedidoPronto }) => {

  // Lógica do temporizador
  const [tempoDecorrido, setTempoDecorrido] = useState("00:00:00");

  useEffect(() => {
    // Pega a data de criação do item mais antigo como referência
    const startTime = new Date(mesa.itens[0].created_at).getTime();

    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(() => {
      const diffEmSegundos = (Date.now() - startTime) / 1000;
      setTempoDecorrido(formatarTempo(diffEmSegundos));
    }, 1000);

    // Limpa o relógio quando o card some da tela para economizar memória
    return () => clearInterval(intervalId);
  }, [mesa.itens]);

  return (
    <div className={styles.card}>
      {/* Cabeçalho ATUALIZADO com o temporizador no meio */}
      <div className={styles.cardHeader}>
        <span className={styles.tableName}>Mesa {mesa.mesa_id}</span>
        
        <div className={styles.timer}>
            <Clock size={16} />
            <span>{tempoDecorrido}</span>
        </div>

        <span className={styles.orderNumber}>#{mesa.pedido_uuid.substring(0, 8)}</span>
      </div>

      {/* Lista de itens (sem alteração na lógica) */}
      <div className={styles.itemsList}>
        {mesa.itens.map((item) => (
           <div key={item.id} className={styles.item}>
             <span className={styles.itemQuantidade}>{item.quantidade}x</span>
             <span className={styles.itemNome}>{item.item_nome}</span>
           </div>
        ))}
      </div>

      {/* Botão ATUALIZADO com a função onClick */}
      <div className={styles.buttonGroup}>
        <button 
          className={`${styles.button} ${styles.buttonPronto}`}
          onClick={() => onPedidoPronto(mesa.pedido_uuid, mesa.mesa_id)}
        >
          PRONTO
        </button>
      </div>
    </div>
  );
};

export default OrderCard;