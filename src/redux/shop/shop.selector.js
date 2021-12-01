import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollectionSelection = createSelector(
    [selectShop],
    shop => shop.collections
);