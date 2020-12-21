import ShopActionTypes from './shop-types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase';

const fetchCollectionStart = () => {
	return {
		type: ShopActionTypes.FETCH_COLLECTIONS_START
	};
};

export const fetchCollections = () => {
	return async (dispatch, getState) => {
		fetchCollectionStart();

		try {
			const collectionRef = firestore.collection('collections');

			const snapshot = await collectionRef.get();

			const transformedCollectionsMap = convertCollectionSnapshotToMap(snapshot);

			dispatch({
				type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
				payload: transformedCollectionsMap
			});
		} catch (err) {
			dispatch({
				type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
				payload: err.message
			});
		}
	};
};
