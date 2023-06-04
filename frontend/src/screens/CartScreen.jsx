import React from 'react'
import { useEffect } from 'react'
import { Link , useLocation,useParams } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { Row , Col ,  ListGroup ,Image , Form , Button , Card  } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart , removeFromCart} from '../actions/cartAction'
import { useNavigate } from 'react-router-dom'
function CartScreen(match  , history) {
  const location = useLocation()

  const {id} = useParams()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const  dispatch = useDispatch()
  const navigate = useNavigate()


  const cart = useSelector(state => state.cart)

  const {cartItems} = cart
  console.log('cartItems',cartItems)
  useEffect(()=>{
    if (id){
      dispatch(addToCart(id,qty))
    }
  },[dispatch,id,qty])


  const removeFromCartHandler = (id) => {
    // console.log('remove:', id )
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }



  console.log('qty:',qty)
  return (
    
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ?(
            <Message variant= 'info' > 
            Your cart is empty <Link to= '/'> Go Back</Link>

            </Message>

          ) : (                   //varient is used to give only color if cart is empty flush is color type//
            <ListGroup variant='flush'>     
               { cartItems.map( item => (

                <ListGroup.Item key={item.key}>

                  <Row>
                    <Col md = {2}>

                      <Image src={item.image} alt = {item.name} fluid rounded/>
                    </Col>

                    <Col md = {3}>
                      
                      <Link to = {`/product/${item.product}`}>{item.name}</Link>
                    
                    </Col>

                    <Col md = {2}>
                      ${item.price}
                    </Col>


                    <Col md = {3}>
                    <Form.Control
                    as = "select"
                    value={item.qty}
                                                  onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value)))
                                                  }>
                                                      {
                                                          [...Array(item.countInstock).keys()].map((x) => (
                                                              <option key = { x + 1} value={x + 1}>
                                                                  {x + 1}
                                                              </option>
                                                          ))
                                                      }
                                              </Form.Control>

                                                  

                                         

                    <Col md = {1}>

                      <Button 
                      type = 'button'
                      variant='light'
                      onClick={()=> removeFromCartHandler(item.product)}
                      
                      >

                        <i className='fas fa-trash'></i>
                        
                      </Button>



                    </Col>
                    </Col>
                    </Row>



                </ListGroup.Item>
                   ))
                
               }
            </ListGroup>

          )}
 
        
        </Col>
        <Col md = {4}>       {/* md {1 } is used to large coloum style for data via react bootstarp */}
          <Card>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <h2>Subtotal({cartItems.reduce((acc,item)  => acc + item.qty, 0 )}) items</h2>
                ${cartItems.reduce((acc,item)  => acc + item.qty * item.price, 0 ).toFixed()}



              </ListGroup.Item>

            </ListGroup>

            <ListGroup.Item>
              <Button
              type='button'
              className = 'btn-block'
              disabled = {cartItems.length === 0}
              onClick={checkoutHandler}>
                Proceed to Checkout
              </Button>


            </ListGroup.Item>
          </Card>
         </Col>
      </Row>
    
  )
}

export default CartScreen
