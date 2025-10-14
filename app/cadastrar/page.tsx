import Link from "next/link";
import estilos from "./PaginaCadastro.module.css";

export default function PaginaCadastro() {
  return (
    <div className={estilos.containerPrincipal}>
      <div className={estilos.cartao}>
        <h1 className={estilos.tituloPrincipal}>FastOrder - Cozinha</h1>
        <h2 className={estilos.subtitulo}>Crie sua conta de acesso</h2>

        <form className={estilos.formulario}>
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
        </form>

        <p className={estilos.linkRodape}>
          Já tem uma conta? <Link href="/entrar">Acesse aqui</Link>
        </p>
      </div>
    </div>
  );
}
