import SHOP_DATA from "./shop.data";

import ShopActionTypes from './shop.types'

const INITIAL_DATA = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case ShopActionTypes.UPADATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default shopReducer