import { useAuth } from "../context/authContext";
import img from "../images/welcome.webp";

const Home = () => {
  const { logout, loading, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Prueba
          </a>

          <div class="btn-group dropstart">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
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
                className="lucide lucide-circle-user"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </button>
            <ul className="dropdown-menu p-2">
              <li>
                <strong>{user.email}</strong>
              </li>

              <li className="dropdown-item" onClick={handleLogout}>
                Salir
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Hola, <strong>{user.displayName || user.email}</strong>
            </h5>
            <p className="card-text">
              Este es una aplicacion de prueba, realizzando un login con react y
              firebase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
