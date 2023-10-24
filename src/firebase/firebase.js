import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7nwN56JwqxXse9LqncMiMKAnlUu3Phl8",
  authDomain: "luciano-k-app.firebaseapp.com",
  projectId: "luciano-k-app",
  storageBucket: "luciano-k-app.appspot.com",
  messagingSenderId: "142338202605",
  appId: "1:142338202605:web:db9dce052afc02f30365e4",
  measurementId: "G-WZVEBQ241L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

