"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import styles from "./Kitchen.module.css";
import { buscarPedidos } from "../lib/ordersService";
import { supabase } from "../lib/supabase";


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

export default function KitchenPage() {
  const [pedidos, setPedidos] = useState<Mesa[]>([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    async function inicializarPedidos() {
      const mesas = await buscarPedidos();
      setPedidos(mesas);
      setLoading(false);
    }
    inicializarPedidos();

    const channel = supabase
      .channel("realtime-pedidos")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "pedidos" },
        () => { buscarPedidos().then(setPedidos); }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  
  const handlePedidoPronto = (pedidoUuid: string, mesaId: string | number) => {
    
    alert(`Refeição da Mesa ${mesaId} está pronta para entrega pelo garçom!`);
    
    
    setPedidos(pedidosAtuais => 
      pedidosAtuais.filter(p => p.pedido_uuid !== pedidoUuid)
    );
  };


  if (loading) return <div>Carregando pedidos...</div>;

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
     
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Pedidos por mesas</h1>
          <p className={styles.subtitle}>Pedidos aguardando na cozinha</p>
        </div>

        <div className={styles.cardsContainer}>
          {pedidos.map((mesa) => (
         
            <OrderCard 
              key={mesa.pedido_uuid} 
              mesa={mesa} 
              onPedidoPronto={handlePedidoPronto} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}