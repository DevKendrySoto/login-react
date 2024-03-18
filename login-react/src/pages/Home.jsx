import { useAuth } from "../context/authContext";

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
      <button onClick={handleLogout}>sal de aqui</button>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};
export default Home;
