import app from './app.js'

import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const hellfireclubCollection = collection(db, 'hellfire-club-rpg');
    const docRef = await addDoc(hellfireclubCollection, subscription);
    return docRef.id;
}