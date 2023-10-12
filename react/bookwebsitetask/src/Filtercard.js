import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { userdata } from './user';
function Filtercard() {
   
    const [query,setquery] = useState();
  return (
   <>
   <Container className='mt-5'>
   <input type="text" value={query} onChange={(e)=>{setquery(e.target.value)}} className='bg-white border border-1 px-1 w-md-100 w-sm-100 w-lg-auto'/>
  <Row >
  <Col xl={3} className='border border-2 border-Secondary rounded mt-3 g-1'></Col>
  <Col xl={9}>
   {userdata.filter((i1)=>i1.title.includes(query)).map((i1)=>
            <Row className='border border-2 border-Secondary rounded p-1 mt-3'>
            <Col xl={4}>
                <img src={i1.url} alt="" style={{height:"200px",width:"200px"}} className='rounded-3'/></Col>
            <Col xl={5} className='fs-6'>
                <h3>{i1.title}</h3>
            <Button>Featured</Button>
            <p><label htmlFor="Late Escape Deal" className='bg-success rounded-2 px-1 text-white'>Late Escape Deal</label></p>
            <ul>
            <li><b>Deluxe Room</b></li>
            <li>1 double bed</li>
            <li>Free Cancellation</li>
            <li>No prepayment needed - pat at the property</li>
            </ul>
            </Col>
            <Col xl={3} className='text-end'>
            <h1>Good</h1>
            <span>27 reviews</span>
            <label htmlFor="new" className='fs-6 bg-warning rounded-3 px-1'>New to Booking.com</label>
            <p>9 nights, 2 adults</p>
            <p><strike>38,497</strike><h1>28,873</h1></p>
            <p>+ 3,465 taxes and charges</p>
            <Button>See availability</Button>
            </Col>
            </Row>
            )}
            </Col>
            </Row>
    
   </Container>
   </>
  )
}

export default Filtercard
