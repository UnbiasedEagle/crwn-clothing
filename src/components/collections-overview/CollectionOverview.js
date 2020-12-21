import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { shopCollectionArraySelector, shopCollectionLoading } from '../../redux/shop/shop-selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollections } from '../../redux/shop/shop-actions';

import './CollectionOverview.css';
import Spinner from '../spinner/Spinner';

class CollectionOverview extends React.Component {
	componentDidMount() {
		this.props.fetchCollections();
	}

	render() {
		if (this.props.loading) {
			return <Spinner />;
		}

		return (
			<div className='collections-overview'>
				{this.props.collections.map((collection) => {
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
	}
}

const mapStateToProps = createStructuredSelector({
	collections: shopCollectionArraySelector,
	loading: shopCollectionLoading
});

export default connect(mapStateToProps, { fetchCollections })(CollectionOverview);
