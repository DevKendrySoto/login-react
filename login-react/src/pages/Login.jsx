import { useState } from "react";
import "../styles/Login.css";
import img from "../images/images.png";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ({ target: { name, value } }) => {
    setUserLogin({ ...userLogin, [name]: value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(userLogin.email, userLogin.password);
      navigate("/");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found:":
          errorMessage = "No hay registro de ese usuario.";
          break;
        case "auth/wrong-password":
          errorMessage =
            "La contraseña es incorrecta para el correo electrónico proporcionado.";
          break;
        case "auth/network-request-failed":
          errorMessage =
            "Se produjo un error de red. Por favor, verifica tu conexión a internet e inténtalo de nuevo.";
          break;
        default:
          errorMessage =
            "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.";
      }
      console.log(error);
      setError(errorMessage);
    }
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-6 welcome-section-login d-none d-md-flex">
          <div className="contenedor">
            <p>Hola,</p>
            <ul>
              <li>Mundo</li>
              <li>Usuario</li>
              <li>Bienvenido</li>
            </ul>
          </div>
          <img src={img} className="img" />
        </div>
        <div className="col-md-6 col-12 login-section">
          <h1 className="text-center">Login</h1>
          <div className="container">
            <form className="p-5 form" onSubmit={handleSubmitLogin}>
              <div className="form-floating mb-3">
                <input
                  required
                  onChange={handleLogin}
                  name="email"
                  type="email"
                  className="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Dirección de correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  required
                  name="password"
                  onChange={handleLogin}
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Contraseña</label>
              </div>
              {error && (
                <div className="alert alert-danger text-muted border border-danger rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="me-2 lucide lucide-circle-alert"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  {error}
                </div>
              )}
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="showPassword"
                  onChange={handleCheckboxChange}
                  checked={showPassword}
                />
                <label className="form-check-label" for="showPassword">
                  Mostrar contraseña
                </label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Iniciar sesión
                </button>
              </div>
              <div className="mt-3 text-center">
                <Link to="/register">Registrarse</Link> |{" "}
                <Link to="/forgot-password">Olvidé mi contraseña</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
