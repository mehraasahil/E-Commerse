import React from 'react'
import { useState,useEffect } from 'react'
// import products from '../products'    (this line remove to check axios)
import { Row ,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
function HomeScreen() {
  const[products,setProducts] = useState([])
  useEffect(()=>{
    async function fetchProducts(){
    const{data}= await axios.get('/api/products/')
    setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <div>
        <Row>
            {products.map(product => (
                <Col key = {product._id} sm ={12} md={6} Lg={4} xL={3}>
                     <Product product = {product}/> {/* {eatliar data called after map in h3 {product.name} but line remove} data is sending in Product.jsx file via object {product} as props*/}
                </Col>
               
            ))}
        </Row>
      
    </div>
  )
}

export default HomeScreen
