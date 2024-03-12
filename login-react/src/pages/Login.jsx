import { useState } from "react";
import "../styles/Login.css";
import img from "../images/images.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-6 welcome-section d-none d-md-flex">
          <div class="contenedor">
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
            <form className="p-5 form">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Dirección de correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Contraseña</label>
              </div>
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
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <div className="mt-3 text-center">
                <a href="/Register">Registrarse</a> |{" "}
                <a href="#">Olvidé mi contraseña</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
