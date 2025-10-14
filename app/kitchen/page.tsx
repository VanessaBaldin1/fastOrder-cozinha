"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import styles from './Kitchen.module.css';
import { buscarPedidos } from "../lib/ordersService";

// Tipagem das mesas e itens
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
  itens: OrderItemType[];
}

export default function KitchenPage() {
  const [pedidos, setPedidos] = useState<Mesa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function exibirPedidos() {
      const mesas = await buscarPedidos();
      setPedidos(mesas);
      setLoading(false);
    }

    exibirPedidos();
  }, []);

  if (loading) return <div>Carregando pedidos...</div>;

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {pedidos.map((mesa) => (
            <OrderCard key={mesa.mesa_id} mesa={mesa} />
          ))}
        </div>
      </main>
    </div>
  );
}
