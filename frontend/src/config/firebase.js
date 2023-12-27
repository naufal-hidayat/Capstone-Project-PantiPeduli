import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//my web
const firebaseConfig = {
  apiKey: "AIzaSyCNO98BRWuecynAjrf30ELNyTeO6fZ6WcQ",
  authDomain: "panti-peduli-d0c5e.firebaseapp.com",
  projectId: "panti-peduli-d0c5e",
  storageBucket: "panti-peduli-d0c5e.appspot.com",
  messagingSenderId: "1087746325300",
  appId: "1:1087746325300:web:40e7d5185f13c775bf0361",
  measurementId: "G-ZNY93TN3CX",
};

//panti peduli web
// const firebaseConfig = {
//   apiKey: "AIzaSyCf08KqGWESPBscYx_uAIl6rxGE0gAx6v0",
//   authDomain: "panti-peduli-d60a5.firebaseapp.com",
//   databaseURL: "https://panti-peduli-d60a5-default-rtdb.firebaseio.com",
//   projectId: "panti-peduli-d60a5",
//   storageBucket: "panti-peduli-d60a5.appspot.com",
//   messagingSenderId: "651998357811",
//   appId: "1:651998357811:web:dab912b6a5ff029a1db646",
//   measurementId: "G-ENZMXD10QN",
// };

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STIRAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_API_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
