import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const getShop = (state) => state.shop;

export const shopCollectionSelector = createSelector([ getShop ], (shop) => shop.collections);

export const shopCollectionArraySelector = createSelector(
	[ getShop ],
	(shop) => (shop.collections ? Object.values(shop.collections) : [])
);

export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[ shopCollectionSelector ],
		(shopCollections) => (shopCollections ? shopCollections[collectionUrlParam] : null)
	)
);
