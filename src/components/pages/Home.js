import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
   return( <div style = {{justifyContent: 'centre'}}>
       <Link to = '/Hospitals and Beds'>
       <Card className="bg-dark text-white">
       
  <Card.Img src={require("../../Assets/Hospital.jpg")}  alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Hospitals and Beds</Card.Title>
    <Card.Text>
      Get live update on the hospitals around you. 
      Click to redirect to this page
    </Card.Text>
    <Card.Text>Last updated 5 months ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </Link>


    <Link to = '/Medical Colleges and Beds'>
       <Card className="bg-dark text-white">
       
  <Card.Img src={require("../../Assets/Med.jpg")}  alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Medical Colleges and Beds</Card.Title>
    <Card.Text>
    Get live update on the medical colleges around you.
    Click to redirect to this page
    </Card.Text>
    <Card.Text>Last updated 5 months ago</Card.Text>
  </Card.ImgOverlay>
</Card>
    </Link>

    <Link to = '/ContactNumber'>
    <Card className="bg-dark text-white">
       
       <Card.Img src={require("../../Assets/Helpline.jpg")}  alt="Card image" />
       <Card.ImgOverlay>
         <Card.Title style = {{color: 'black'}}>Helpline and Contact number</Card.Title>
         <Card.Text style = {{color: 'black'}}>
           Here is a list of Helpline numbers which you can contact in times of emergency. 
           Click to redirect to this page
         </Card.Text>
         <Card.Text style = {{color: 'black'}}>Last updated 5 months ago</Card.Text>
       </Card.ImgOverlay>
     </Card>
    </Link>

    <Link to = '/ContactLink'>
    <Card className="bg-dark text-white">       
       <Card.Img src={require("../../Assets/notification.png")}  alt="Card image" />
       <Card.ImgOverlay>
         <Card.Title style ={{ font: 'black'}}>Notifications and Advisories</Card.Title>
         <Card.Text style ={{ font: 'black'}}>
           Here are a few Website Links which will give you enough informations about the covid-19.
           Click to redirect to this page
         </Card.Text>
         <Card.Text>Last updated 5 months ago</Card.Text>
       </Card.ImgOverlay>
     </Card>
    </Link>
    
 
    </div>
   )
}

export default Home;

/*          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ContactLink'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Notifications & advisories:
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Hospitals and Beds'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hospital Dashboards
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/ContactNumber'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Helpline Numbers
              </Link>
            </li>
          </ul> */
