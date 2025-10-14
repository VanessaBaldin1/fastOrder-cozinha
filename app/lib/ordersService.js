import { supabase } from "./supabase";

export async function buscarPedidos() {
    const { data, error } = await supabase
    .from("pedidos")
    .select("*")
    .eq("status", "pendente");

    if (error) {
        console.error("Erro ao buscar pedidos:", error)
        return []
    }
    
    const grupo = data.reduce((acc, item) => {
        if (!acc[item.mesa_id]) {
            acc[item.mesa_id] = []      
        }
        acc[item.mesa_id].push(item)
        return acc;
    }, {});
    return Object.keys(grupo).map((mesaId) => ({
        mesa_id: mesaId,
        itens: grupo[mesaId]
    }))
}
