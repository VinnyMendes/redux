
import { FETCH_PRODUCTS_START,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR } from '../actions/produtcts.action'

type ActionType = {
  type: string;
  payload?: any;
};

const initialState = {
  products: [],
  isFetching: false,
  errorMessage: undefined
};

export const fetchProductsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
      case FETCH_PRODUCTS_START:
          return {
            isFetching: true
          }

      case FETCH_PRODUCTS_SUCCESS:
          return {
              errorMessage: undefined,
              isFetching: false,
              products: action.payload
          };

      case FETCH_PRODUCTS_ERROR:
        return {
          isFetching: false,
          products: [],
          errorMessage: action.payload.errorMessage,
        };
        
      default:
          return state;
  }
}