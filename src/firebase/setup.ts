import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVAijqNZRgCllMiMBAhU-V5hsK7b-uxOc",
  authDomain: "news-clone-9dba8.firebaseapp.com",
  projectId: "news-clone-9dba8",
  storageBucket: "news-clone-9dba8.appspot.com",
  messagingSenderId: "716456879",
  appId: "1:716456879:web:2e384e9124306e5831a55a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()