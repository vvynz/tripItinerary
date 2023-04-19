import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// firebase database configurations
const firebaseConfig = {
  projectId: "tripplanner-d56a0",
  dbURL: "https://tripplanner-d56a0-default-rtdb.firebaseio.com/",
};

// initialize Firebase
export const app = initializeApp(firebaseConfig);

// initialize database
export const database = getDatabase(app);