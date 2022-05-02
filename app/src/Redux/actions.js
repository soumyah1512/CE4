// use axios for api call
// import axios from "axios";

export const IS_LOADING = 'IS_LOADING';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_ERROR = 'IS_ERROR';

export const loading = () => ({
    type: IS_LOADING
})
export const success = (payload) => ({
    type: IS_SUCCESS,
    payload
})
export const error = () => ({
    type: IS_ERROR
})

function getProductsData() {}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
