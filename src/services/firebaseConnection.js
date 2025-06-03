
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB5gPO9MpeSgZ3m2gFBVSxLab5qAdt2CYw",
  authDomain: "sistemachamados-420cf.firebaseapp.com",
  projectId: "sistemachamados-420cf",
  storageBucket: "sistemachamados-420cf.firebasestorage.app",
  messagingSenderId: "862145947094",
  appId: "1:862145947094:web:93f28a42959ec1e71af077",
  measurementId: "G-H7PV62BPBD"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };