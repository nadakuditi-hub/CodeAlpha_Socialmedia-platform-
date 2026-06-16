import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc,
increment
}
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
authDomain: "social-media-8c586.firebaseapp.com",
projectId: "social-media-8c586",
storageBucket: "social-media-8c586.firebasestorage.app",
messagingSenderId: "894300364648",
appId: "1:894300364648:web:393f9c3e237cdb6e4d00dd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc,
increment
};
