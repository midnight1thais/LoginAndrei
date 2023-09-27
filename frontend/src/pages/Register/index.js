import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { api } from "../../services/api";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [nome, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome,
      email,
      senha,
    };
    await api.post(`${api}/user/create`, data);
    alert("Usuário criado com sucesso!");
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSubmit} className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <div className="wrap-input">
          <input
            className={nome !== "" ? "has-val input" : "input"}
            type="text"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={senha !== "" ? "has-val input" : "input"}
            type="senha"
            value={senha}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
            Criar Conta
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
