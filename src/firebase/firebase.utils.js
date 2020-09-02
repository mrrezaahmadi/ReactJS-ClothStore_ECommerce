import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// My app Firebase configuration
const config = {
    apiKey: "AIzaSyA95DcB4yDdbKy3a9xvpjoH9SG-zZNuyA8",
    authDomain: "myclothingstore-db.firebaseapp.com",
    databaseURL: "https://myclothingstore-db.firebaseio.com",
    projectId: "myclothingstore-db",
    storageBucket: "myclothingstore-db.appspot.com",
    messagingSenderId: "53297863609",
    appId: "1:53297863609:web:97cfdf02b54f507b903468",
    measurementId: "G-WCBW69H31G"
}


// create a document in our database
const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()

    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

// Initialize Firebase
firebase.initializeApp(config)

const firestore = firebase.firestore()
const auth = firebase.auth()

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export { firestore, auth, signInWithGoogle, createUserProfileDocument, googleProvider, getCurrentUser }
export default firebase