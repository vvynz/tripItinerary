// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANGTBhH0r3IZvBZMktlx6HJiLfg0p-0BA",
  authDomain: "tripplanner-d56a0.firebaseapp.com",
  databaseURL: "https://tripplanner-d56a0-default-rtdb.firebaseio.com",
  projectId: "tripplanner-d56a0",
  storageBucket: "tripplanner-d56a0.appspot.com",
  messagingSenderId: "793739850810",
  appId: "1:793739850810:web:70891cf08a11bc9602f103"
};

// initialize Firebase
export const app = initializeApp(firebaseConfig);

// initialize database
export const database = getDatabase(app);