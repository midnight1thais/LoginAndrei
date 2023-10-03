import { useNavigate } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Home = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpa o localStorage
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");

    // Redireciona de volta para a tela de login
    navigate("/login");
    window.location.reload();
  };

  return (
    <LayoutComponents>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span style={{ color: "#fff" }}>Jovem Programador</span>
          </h1>
          <br />
          <br />
          <p style={{ color: "#f4f4f4" }} className="home-description">
            Aplicativo para auxiliar na organização de tarefas.
          </p>
          <button onClick={handleLogout} >Sair</button>
        </div>
      </div>
    </LayoutComponents>
  );
};
