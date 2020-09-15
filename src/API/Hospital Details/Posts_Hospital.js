import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Box-Hospital.css';
import {Pie} from 'react-chartjs-2';

const Posts = (props) =>{
  const [state,setState] = useState({
    click: false
  })


  let display = null;
  
  const toggleHandler = () => {
    setState({
        click: !state.click
    })
  }
  if(!state.click){
    display = (
    <Card.Body className = 'box' style={{ width: '18rem' }} onClick = {toggleHandler}>
     <Card.Title>{props.state}</Card.Title>
     <Card.Text>
      
     Click to know about the informations in {props.state}
     <br />
        </Card.Text>
    </Card.Body>
  )
    }
    else{
      display = (
        <Card.Body  className = 'box' style={{ width: '18rem'}} onClick = {toggleHandler}>
        <Card.Title>{props.state}</Card.Title>
        <Card.Text>
           Total Rural Hospitals: {props.ruralHospitals}
           </Card.Text>
           <Card.Text>
           Total Rural Beds:  {props.ruralBeds}
           </Card.Text>
           <Card.Text>
           
           Total Urban Hospital: {props.urbanHospitals}
           </Card.Text>
           <Card.Text>
           
           Total Urban Beds: {props.urbanBeds}
           </Card.Text>
           <Card.Text>
           
           Total Hospitals: {props.totalHospitals}
           </Card.Text>
           <Card.Text>
            Total Beds: {props.totalBeds}
         </Card.Text>
       </Card.Body>
      
   )
     }
    return (
      <div >


      {display}

      </div>
    );
}

export default Posts;
