import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://plamp-d0c57-default-rtdb.firebaseio.com/",
});

export const db = admin.database();
