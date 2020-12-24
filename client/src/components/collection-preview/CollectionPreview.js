import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.css';

const CollectionPreview = ({ title, items, history }) => {
	return (
		<div className='collection-preview'>
			<h1
				onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
				style={{ cursor: 'pointer' }}
				className='title'
			>
				{title.toUpperCase()}
			</h1>
			<div className='preview'>
				{items.map((item) => {
					return (
						<CollectionItem
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);
