import React from 'react';

import { connect } from 'react-redux';
import { fetchCollections } from '../../redux/shop/shop-actions';
import { selectCollection, isCollectionLoaded } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/CollectionItem';

import './CollectionPage.css';
import Spinner from '../../components/spinner/Spinner';

class CollectionPage extends React.Component {
	componentDidMount() {
		this.props.fetchCollections();
	}

	render() {
		if (this.props.loading) {
			return <Spinner />;
		}

		const { title, items } = this.props.collection;

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
	}
}

const mapStateToProps = (state, props) => {
	return {
		collection: selectCollection(props.match.params.collectionId)(state),
		loading: isCollectionLoaded(state)
	};
};

export default connect(mapStateToProps, { fetchCollections })(CollectionPage);
