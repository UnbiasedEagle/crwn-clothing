import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDgABZjaLsV3tz51MOPrKK-1g4DMnS1zBU',
	authDomain: 'crwn-clothing-648f5.firebaseapp.com',
	databaseURL: 'https://crwn-clothing-648f5.firebaseio.com',
	projectId: 'crwn-clothing-648f5',
	storageBucket: 'crwn-clothing-648f5.appspot.com',
	messagingSenderId: '83683244621',
	appId: '1:83683244621:web:82f031a44c5ef57ba9fa04',
	measurementId: 'G-2YKH8J6QPT'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (user, additionData) => {
	if (!user) {
		return;
	}

	const userRef = firestore.doc(`users/${user.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = user;

		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionData
			});
		} catch (error) {
			console.error('Error creating user document', error);
		}
	}

	return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
	if (!uid) return null;

	try {
		const userDocument = await firestore.doc(`users/${uid}`).get();

		return {
			uid,
			...userDocument.data()
		};
	} catch (error) {
		console.error('Error fetching user', error);
	}
};

export default firebase;
