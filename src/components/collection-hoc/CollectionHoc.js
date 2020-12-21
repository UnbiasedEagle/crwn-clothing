import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase';

const CollectionHoc = (Component) => {
	return class extends React.Component {
		unsubscribeFromSnapShot = null;

		componentDidMount() {
			const collectionRef = firestore.collection('collections');

			this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapshot) => {
				const transformedCollectionsMap = convertCollectionSnapshotToMap(snapshot);

				this.props.updateCollections(transformedCollectionsMap);
			});
		}

		componentWillUnmount() {
			this.unsubscribeFromSnapShot();
		}

		render() {
			return <Component {...this.props} />;
		}
	};
};

const composedCollectionHoc = compose(connect(null, { updateCollections }), CollectionHoc);

export default composedCollectionHoc;
