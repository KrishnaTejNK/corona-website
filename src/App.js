import React, { Component } from 'react';
import Hosp from './API/Hospital Details/Hospital';
import Med from './API/MedicalCollege Details/Med';
import {Button} from 'react-bootstrap';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import ContactNumber from './API/Contact info/ContactNumber';
import ContactLink from './API/Contact Link/ContactLink';

class App extends Component {
  state = {
    hospital: false
  }

  toggleHander = () => {
    this.setState({
      hospital: !this.state.hospital
    })
  }


  render(){
    let display = null
    if(this.state.hospital){
      display = <Hosp />
    }
    else{
      display = <Med />
    }

    return (
      <div className="App">
    <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path = '/Hospitals and Beds' component = {Hosp}/>
          <Route path = '/Medical Colleges and Beds' component = {Med}/>
          <Route path='/ContactLink' exact component={ContactLink} />
          <Route path='/ContactNumber' exact component={ContactNumber} />
        </Switch>
    </Router>
      </div>
    );
}
}

export default App;


/* */
