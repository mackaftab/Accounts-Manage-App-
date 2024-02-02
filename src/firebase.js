import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDV2mkwYhSqlBhUDx8bJOVCUdsn5zh3PTQ",
    authDomain: "chaintech-2e538.firebaseapp.com",
    projectId: "chaintech-2e538",
    storageBucket: "chaintech-2e538.appspot.com",
    messagingSenderId: "406664024745",
    appId: "1:406664024745:web:e52f331010f6a585cb0fb8"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

export {  auth };