import React from 'react';
import './App.css';
import { Container,Button,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import { useState } from 'react';
import { userdata } from './user';
import Header from './header';
import Date1 from './Date1';



function Home() {
  const [query,setquery] = useState('');
  function Filtercard() {
    return (
     <>
     <Container className='mt-5'>
    <Row>
    <Col xl={3} className='border border-2 border-Secondary rounded mt-3 g-1 p-1'>
    <iframe className='border border-rounded-3'
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14686.282754045384!2d72.67424525!3d23.03953015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697173440376!5m2!1sen!2sin"  
      width="100%" 
      height="200" 
      allowfullscreen="true"  
      style={{ border: 0 }} 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
        </iframe></Col>
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
  return (
    <>
    <Container fluid className='parent pb-2'>
    <Container >
        <Header/>
        <Navbar/>
       <h1 className='text-white pt-5 fs-1'>Find your next stay</h1>
       <p className='text-white pt-1 fs-4 pb-5 mb-5 para'>Search low prices on hotels, homes and much more...</p>
       <div className='child py-1'>
       <div className='d-lg-inline d-md-block d-sm-block start-0   border border-4 m-0 border-warning py-2 px-1 bg-white child1'>
         <input type="text" value={query} onChange={(e)=>{setquery(e.target.value)}} className='bg-white border border-0 px-1 w-md-100 w-sm-100 w-lg-100' placeholder='Where are You Going'/>
        </div>
       <div className='d-lg-inline d-md-block d-sm-block start-0   border border-4 m-0 border-warning py-2 px-1  bg-white child1'> 
       <Date1 className='bg-white border border-0 px-1  w-md-100 w-sm-100'/>
       </div>
       <div className='d-lg-inline d-md-block d-sm-block start-0    border border-4  m-0 border-warning py-2 px-1  bg-white child1'><input type="button" value="2-adults - 0-Children - 1 Room" className='bg-white border border-0 px-1  w-md-100 w-sm-100'/></div>
       <div className='d-lg-inline d-md-block d-sm-block start-0   border border-4 m-0 border-warning py-2    child1'>
        <button className=' border border-0 px-4 p-1 btn text-white child1 ' onClick={Filtercard}>Search</button>
        </div>
       </div>
    </Container>
    </Container>
    {/* {Filtercard()} */}
    </>
  )
}

export default Home;
