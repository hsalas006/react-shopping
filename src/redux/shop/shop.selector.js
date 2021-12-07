import { createSelector } from "reselect";

import memoize from "lodash.memoize"


const selectShop = state => state.shop;

export const selectCollectionSelection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollectionSelection],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollectionSelection],
        (collections) => collections[collectionUrlParam]
    )
);