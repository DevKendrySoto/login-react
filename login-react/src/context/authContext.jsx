import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import appFireBase from "../credentials";

const authContext = createContext();

const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function AuthProvider({ children }) {
  const signup = (email, password) => {
    createUserWithEmailAndPassword(appFireBase, email, password);
  };
  return <authContext.Provider value={signup}>{children}</authContext.Provider>;
}
export { authContext, AuthProvider, useAuth };
