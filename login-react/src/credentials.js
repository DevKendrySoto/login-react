// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdGhoiyoo_97KbD98Z7Ph18dzR7gO3fJs",
  authDomain: "login-react-project-bbd86.firebaseapp.com",
  projectId: "login-react-project-bbd86",
  storageBucket: "login-react-project-bbd86.appspot.com",
  messagingSenderId: "932627804297",
  appId: "1:932627804297:web:0b3aa41f48192c73e81658",
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
export default appFireBase;
