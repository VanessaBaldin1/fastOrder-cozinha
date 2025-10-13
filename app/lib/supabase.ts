import { createClient } from "@supabase/supabase-js";

//Obtendo os dados (URL e ANON KEY) das variáveis de ambiente
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("As variáveis de ambiente devem ser definidas");
}

// Exportando uma const supabase com os recursos de acesso ao back-end

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
