import "../styles/Login.css";

const Login = () => {
  return (
    <div class="container-fluid p-0">
  <div class="row g-0">
    <div class="col-6 welcome-section d-none d-md-flex">
      <h1>Hola Mundo</h1>
    </div>
    <div class="col-md-6 col-12 login-section">
      <div class="container">
        <form class="p-5">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Dirección de correo</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <div class="mb-3">
            <input type="checkbox" class="form-check-input" id="showPassword" />
            <label class="form-check-label" for="showPassword">
              Mostrar contraseña
            </label>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
          <div class="mt-3 text-center">
            <a href="#">Registrarse</a> | <a href="#">Olvidé mi contraseña</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};
export default Login;


