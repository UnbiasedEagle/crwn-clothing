import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { sectionsSelector } from '../../redux/directory/directory-selector';
import { createStructuredSelector } from 'reselect';
import './Directory.css';

const Directory = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ title, id, imageUrl, linkUrl, size }) => {
				return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);
