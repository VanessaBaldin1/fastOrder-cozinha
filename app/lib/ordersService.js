import { supabase } from "./supabase";

export async function buscarPedidos() {
  const { data, error } = await supabase
    .from("pedidos")
    .select("*")
    .eq("status", "pendente");

  if (error) {
    console.error("Erro ao buscar pedidos:", error);
    return [];
  }

  const grupo = {};

data.forEach((item) => {
  if (!grupo[item.pedido_uuid]) {
    grupo[item.pedido_uuid] = {
      pedido_uuid: item.pedido_uuid,
      mesa_id: item.mesa_id,
      itens: [],
    };
  }
  grupo[item.pedido_uuid].itens.push(item);
});

return Object.values(grupo);
}


export async function atualizarStatusPedido(pedidoUuid, novoStatus) {
  const { data, error } = await supabase
    .from("pedidos")
    .update({ status: novoStatus })
    .eq("pedido_uuid", pedidoUuid);

  if (error) {
    console.error("Erro ao atualizar status:", error);
    return null;
  }

  console.log("Status atualizado:", data);
  return data;
}
