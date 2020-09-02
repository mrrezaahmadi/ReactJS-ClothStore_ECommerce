// import ShopActionTypes from './shop.types'

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

// export const fetchCollectionsStart = () => ({
//     type: ShopActionTypes.FETCH_COLLECTIONS_START,
// })

// export const fetchCollectionsSuccess = collectionsMap => ({
//     type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
//     payload: collectionsMap
// })

// export const fetchCollectionsFailure = errorMessage => ({
//     type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
//     payload: errorMessage
// })

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection("collections");
//         dispatch(fetchCollectionsStart())


//         collectionRef.get().then((snapshot) => {
//             const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionMap))
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
//     }
// }

// The code are unused due to the usage of saga