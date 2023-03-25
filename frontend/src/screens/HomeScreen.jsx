import React from 'react'
import { useState,useEffect } from 'react'
import products from '../products'
import { Row ,Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
function HomeScreen() {
  const[products,setProducts] = useState([])
  useEffect(()=>{
    async function fetchProducts(){
    const{data}= await axios.get('http://127.0.0.1:8000/api/products/')
    setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <div>
        <Row>
            {products.map(product => (
                <Col key = {product._id} sm ={12} md={6} Lg={4} xL={3}>
                     <Product product = {product}/>
                </Col>
               
            ))}
        </Row>
      
    </div>
  )
}

export default HomeScreen
