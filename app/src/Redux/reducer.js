import {IS_LOADING,IS_SUCCESS,IS_ERROR} from "../Redux/actions"

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return{
        ...state,
        isLoading: true,
        isError: false,
        data: []
      }
    case IS_SUCCESS:
        return{
          ...state,
          isLoading: false,
          isError: false,
          data: payload
        }  
    case IS_ERROR:
          return{
            ...state,
            isLoading: false,
            isError: true
          }
  
    default:
      return state;
  }
};
export { reducer };
