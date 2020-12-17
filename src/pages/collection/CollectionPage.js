import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './CollectionPage.css';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='category'>
			<h2 className='category__title'>{title}</h2>
			<div className='category__items'>
				{items.map((item) => (
					<CollectionItem
						key={item.id}
						id={item.id}
						price={item.price}
						name={item.name}
						imageUrl={item.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		collection: selectCollection(props.match.params.collectionId)(state)
	};
};

export default connect(mapStateToProps)(CollectionPage);
