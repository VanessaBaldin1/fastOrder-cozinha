import { redirect } from "next/navigation";

export default function HomePage() {
  // Usamos a função 'redirect' do Next.js para fazer a mágica.
  redirect("/login");

  // Como o redirect acontece no servidor, nada abaixo dele será renderizado.

  return null;
}
