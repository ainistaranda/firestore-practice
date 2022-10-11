import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';

import serviceaccount from './serviceaccount.js';

initializeApp({
    credential: cert(serviceaccount)
})

const db = getFirestore();

const newMovie = {
    title: 'Step Brothers',
    genre: 'comedy',
    rated: 'R',
    released: 2008,
    cast: [
        'Will Ferrell',
        'John C. Reilly',
        'Richard jenkins'
    ]
}

db.collection('movies').add(newMovie)
.then(doc => console.log('Movie created: ', doc.id))
.catch(console.error)
