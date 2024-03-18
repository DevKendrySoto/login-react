import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdGhoiyoo_97KbD98Z7Ph18dzR7gO3fJs",
  authDomain: "login-react-project-bbd86.firebaseapp.com",
  projectId: "login-react-project-bbd86",
  storageBucket: "login-react-project-bbd86.appspot.com",
  messagingSenderId: "932627804297",
  appId: "1:932627804297:web:0b3aa41f48192c73e81658",
};

const appFireBase = initializeApp(firebaseConfig);
const auth = getAuth(appFireBase);

export { appFireBase, auth };
