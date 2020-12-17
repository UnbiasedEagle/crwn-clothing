import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { shopCollectionArraySelector } from '../../redux/shop/shop-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionOverview.css';

const CollectionOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map((collection) => {
				return (
					<CollectionPreview
						key={collection.id}
						items={collection.items.slice(0, 4)}
						title={collection.title}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: shopCollectionArraySelector
});

export default connect(mapStateToProps)(CollectionOverview);
