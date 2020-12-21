import React from 'react';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import composedCollectionHoc from '../../components/collection-hoc/CollectionHoc';

class ShopPage extends React.Component {
	render() {
		return (
			<div className='shop-page'>
				<CollectionOverview />
			</div>
		);
	}
}

export default composedCollectionHoc(ShopPage);
