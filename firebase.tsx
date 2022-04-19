import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_2rrCpuzpVut2YZkgSCZneafqs1HrFec",
  authDomain: "twitter-b98ec.firebaseapp.com",
  projectId: "twitter-b98ec",
  storageBucket: "twitter-b98ec.appspot.com",
  messagingSenderId: "972210144133",
  appId: "1:972210144133:web:705e2b2020c65375b7faec",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };