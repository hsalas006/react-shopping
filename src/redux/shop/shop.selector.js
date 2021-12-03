import { createSelector } from "reselect";

import memoize from "lodash.memoize"

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const selectCollectionSelection = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollectionSelection],
        (collections) => collections.find((item)=> item.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
)