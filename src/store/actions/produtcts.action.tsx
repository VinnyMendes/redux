import axios from "axios";

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS' 

export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'

export const fetchProductsStarted  = () => {
  return { type: FETCH_PRODUCTS_START };
};

export const fetchProductsSuccess  = (products: any) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: products };
};

export const fetchProductsError  = (errorMessage: any) => {
  return { type: FETCH_PRODUCTS_ERROR, payload: errorMessage };
};

export const fetchProductsThunk = () => async (dispatch: any) => {

  dispatch(fetchProductsStarted);

  try{
    // console.log("Aqui")
    const { data } = await axios.get('http://localhost:3001/products');
    dispatch(fetchProductsSuccess(data));
  }catch(e:any){
    dispatch(fetchProductsError(e.message))
  }
}

export const filterProductsThunk = (palavra: string) => async (dispatch: any) =>{
  dispatch(fetchProductsStarted);
  try {
    const { data } = await axios.get(`http://localhost:3001/products?title_like=${palavra}`);
    dispatch(fetchProductsSuccess(data));
    
  } catch (e: any) {
    dispatch(fetchProductsError(e.message))
  }


}
