import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
function Product({product}) {   {/* this product is object coming from HomeScreen.jsx */}
  return (
    
        <Card className='my-3 p-3 rounded'>             {/* .Taking data from file HomeScreen.jsx  as props and sendind in Home file */}
            <Link to={`/product/${product._id}`}>
         <Card.Img src={product.image}/>
         </Link>

         <Card.Body>
         <Link to ={`/product/${product._id}`}>
         <Card.Title as ='div'>
          <strong>{product.name}</strong>
         </Card.Title>
          
         </Link>
         <Card.Text as = 'div'>   { /* Taking data from file homescreen.jsx as props  for rating adn numReviews*/}
          <div className='my-3'>    {/*Sendin the value , numReviews,color as props in Rating.jsx*/}
            {/* {product.rating} from {product.numReviews} reviews */}   { /* this line is used as taking data from Homescreen .js as props line is send data as props in Rating.jsx*/}
            <Rating value = {product.rating} text = {`${product.numReviews} reviews`} color = {'#f8e825'}/>  {/*Sending the value , numReviews,color as props in Rating.jsx*/}
          </div>
         </Card.Text>
         <Card.Text as = 'h3'> ${product.price}</Card.Text>

         </Card.Body>
        </Card>
      
    
  )
}
 
export default Product
