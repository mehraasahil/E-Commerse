import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'    
// import products from '../products'    (this line remove to check axios)
import { Row ,Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
// import axios from 'axios' // this part also changed into comment after the redux
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const {error,loading,products} = productList
  // const[products,setProducts] = useState([]) //after the comment the data is coming from productAction.js via redux
  useEffect(()=>{
    dispatch(listProducts());

     // async function fetchProducts(){     // comment this part after the redux using data from redux file
    // const{data}= await axios.get('/api/products/')
    // setProducts(data)
    // }
    // fetchProducts()
  },[dispatch])  // added Distapatch only to show error
  // const products = []; // this arrar remove after useselector eror,loading,products//
  return (
    <div>
      {loading?<h2>Loading...</h2>
          : error ? <h3>{error}</h3>
          :
          <Row>
            {products.map(product => (
                <Col key = {product._id} sm ={12} md={6} Lg={4} xL={3}>
                     <Product product = {product}/> {/* {eatliar data called after map in h3 {product.name} but line remove} data is sending in Product.jsx file via object {product} as props*/}
                </Col>
               
            ))}
        </Row>
  }

 {/* // the below code made comment after adding redux for show error and above added */}
         {/* <Row>
           {products.map(product => (
               <Col key = {product._id} sm ={12} md={6} Lg={4} xL={3}> */}
                    {/* <Product product = {product}/> {eatliar data called after map in h3 {product.name} but line remove} data is sending in Product.jsx file via object {product} as props */}
               {/* </Col>
               
          ))}
        </Row> */}
      
    </div>
  )
}

export default HomeScreen
