import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn, signed } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const goToHome = () => {
     
    navigate("/home");

    window.location.reload();
      
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      senha
    };
    try{
    const response = await api.post('auth/login', data)

      alert("Usuário conectado com sucesso!");


      setUser(response.data);
      

      api.defaults.headers.common[
          "Authorization"
      ] = `Bearer ${response.data.data[0].token}`
        
      localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].nome));
      localStorage.setItem("@Auth:token", response.data.data[0].token);
      
      goToHome()
      
    } catch (error) {
      alert('Algo de errado não está certo')
      console.log(error.response);
    }
  };


  // console.log(signed);
  if (!signed) {
    return (
      <LayoutComponents>
        <form onSubmit={handleSubmit} className="login-form">
          <span className="login-form-title"> Bem vindo </span>

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
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn" onClick={handleSubmit}>
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <Link className="txt2" to="/register">
              Criar conta.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    );
  } else {
    console.log('entrei no signed')
    return <Navigate to="/home" />;
  }
};