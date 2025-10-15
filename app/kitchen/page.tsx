"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import styles from "./Kitchen.module.css";
import { buscarPedidos } from "../lib/ordersService";
import ProntoButton from "../components/ProntoButton"; // ✅ novo componente
import { supabase } from "../lib/supabase";

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
  pedido_uuid: string; // adiciona aqui
  itens: OrderItemType[];
}

export default function KitchenPage() {
  const [pedidos, setPedidos] = useState<Mesa[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Função já existente
  useEffect(() => {
    async function exibirPedidos() {
      const mesas = await buscarPedidos();
      setPedidos(mesas);
      setLoading(false);
    }

    exibirPedidos();
  }, []);

useEffect(() => {
  // Carrega pedidos iniciais
  buscarPedidos().then(setPedidos);

  const channel = supabase
    .channel("realtime-pedidos")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "pedidos",
      },
      (payload) => {
        console.log("Novo pedido recebido:", payload.new);
        buscarPedidos().then(setPedidos); // Atualiza toda a lista
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel); // Limpa ao desmontar
  };
}, []);

  // 🔹 Função NOVA (somente adicionada, não interfere na lógica existente)
  async function handleProntoClick() {
    // Aqui você pode chamar a função de atualizar o status no Supabase
    // Exemplo:
    // await atualizarStatusPedido(mesaId, "pronto");
    await new Promise((resolve) => setTimeout(resolve, 800)); // simula tempo de requisição
    console.log("Pedido marcado como pronto!");
  }

  if (loading) return <div>Carregando pedidos...</div>;

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {pedidos.map((mesa) => (
            <div key={mesa.pedido_uuid} className={styles.cardWrapper}>
              <OrderCard mesa={mesa} />
              <div style={{ marginTop: "12px", textAlign: "center" }}>
                <ProntoButton onPronto={handleProntoClick}>
                  Marcar como Pronto
                </ProntoButton>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
