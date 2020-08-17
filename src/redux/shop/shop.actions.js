import ShopActionTypes from './shop.types'

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPADATE_COLLECTIONS,
    payload: collectionsMap
})