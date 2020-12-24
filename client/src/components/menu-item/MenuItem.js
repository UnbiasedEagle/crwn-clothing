import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
	return (
		<div
			onClick={() => history.push(linkUrl)}
			style={{
				height: `${size === 'large' && '400px'}`
			}}
			className='menu-item'
		>
			<div
				className='background-image'
				style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
