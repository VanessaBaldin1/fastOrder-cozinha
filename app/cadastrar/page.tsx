"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import estilos from "./PaginaCadastro.module.css";
import { useEffect } from "react";

export default function PaginaCadastro() {
  const roteador = useRouter();

  const lidarComCadastro = (evento: React.FormEvent) => {
    evento.preventDefault();

    console.log("Formulário enviado! Redirecionando para o login...");

    roteador.push("/login");
  };

  useEffect(() => {}, []);

  return (
    <div className={estilos.containerPrincipal}>
      <div className={estilos.cartao}>
        <h1 className={estilos.tituloPrincipal}>FastOrder - Cozinha</h1>
        <h2 className={estilos.subtitulo}>Crie sua conta de acesso</h2>

        <form className={estilos.formulario} onSubmit={lidarComCadastro}>
          <div className={estilos.grupoInput}>
            <label htmlFor="nome" className={estilos.label}>
              Nome Completo
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              className={estilos.input}
              placeholder="Seu nome completo"
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="email" className={estilos.label}>
              Login (E-mail)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={estilos.input}
              placeholder="seu_usuario@email.com"
            />
          </div>

          <div className={estilos.grupoInput}>
            <label htmlFor="senha" className={estilos.label}>
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              className={estilos.input}
              placeholder="••••••••"
            />
          </div>

         
          <button type="submit" className={estilos.botao}>
            Cadastrar
          </button>

     
          <Link href="/login" passHref>
            <button type="button" className={estilos.botao}>
              Já tem conta? Entrar
            </button>
          </Link>
        </form>

        <p className={estilos.linkRodape}>
          Ou acesse: <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
