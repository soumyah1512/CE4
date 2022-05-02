import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loading, error, success } from "../Redux/actions";
import { Select, Grid } from "./Styled";

export const Products = () => {
  const [products,setProducts] = useState([])
  const [flag,setFlag] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const isLoading = useSelector((state) => state.isLoading)
  const isSuccess = useSelector((state) => state.isSuccess)
  const isError = useSelector((state) => state.isError)



  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(loading())
    fetch(`https://movie-fake-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => dispatch(success(res)))
      .catch((err) => dispatch(error()))
      // setProducts(data)
  }, []);

  // console.log(data)
  // setProducts(data)
  const handleSort = (e) => {
    setFlag(false)
    // dispatch sort products on change
    console.log(e.target.value)
    if(e.target.value === "asc")
    {
      let ascData = data.sort((a,b) => a.price - b.price)
      setProducts(ascData)
      setFlag(true)
    }
    if(e.target.value === "desc")
    {
      let descData = data.sort((a,b) => b.price - a.price)
      setProducts(descData)
    }
  };
  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Something went wrong</h1>
  ) : (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((item) => (
          <div key={item.id} style={{border: '1px solid black'}}>
            <img src={item.image}/>
            <h4>{item.title}</h4>
            <div>
              <p style={{fontSize: "14px"}}>Rs.{item.price}</p>
              <p>{item.brand}</p>
            </div>
          </div>
        ))}
      </Grid>
    </>
  );
};
