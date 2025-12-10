import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyDuSOZHC-sDR-Qq29Z4gWEH_QDZ8xOc6PA",
  authDomain: "dolphin-44254.firebaseapp.com",
  projectId: "dolphin-44254",
  storageBucket: "dolphin-44254.firebasestorage.app",
  messagingSenderId: "279164790122",
  appId: "1:279164790122:web:d4cb1355b40ce6e420f113",
  measurementId: "G-8FK8606Q2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully");

export { db, auth, storage, analytics };
