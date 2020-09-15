import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts_Hospital';
import { Card } from 'react-bootstrap';
import './Box-Hospital.css';

class Hospital extends Component {
  state = {
    posts: [],
    summary: [],
    selectedPostId: null,
    error: false
}
  componentDidMount() {
   axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
    .then(response =>{
      console.log(response)
      const posts = response.data.data.regional
      const updatedPosts = posts.map(post => {
          return {
              ...post,
          }
    })
    this.setState({posts: updatedPosts}                 );
    console.log(response);
})


  }

  render(){
    let posts = <p style={{textAign:'center'}}>Something went wrong!</p>
    let summary = <p style={{textAign:'center'}}>Something went wrong!</p>
    if(!this.state.error){
      posts = this.state.posts.map(post => {
          return <Posts 
          state = {post.state}
          ruralHospitals = {post.ruralHospitals}
          ruralBeds = {post.ruralBeds}
          urbanHospitals = {post.urbanHospitals}
          urbanBeds = {post.urbanBeds}
          totalHospitals = {post.totalHospitals}
          totalBeds = {post.totalBeds} 
          asOn = {post.asOn}
      />

})
}



   
    return (
      <div className = "Data">
      <Card.Header style = {{color: 'white' ,alignSelf: 'center'}}>Hospitals and Beds</Card.Header>
        <Card.Body>
          <Card.Title style = {{color: 'white'}}>Summary</Card.Title>
          <Card.Text style = {{color: 'white'}}>
            Total Rural Hospitals: 39620
            <br />
            Total Rural Beds: 559176 
            <br />
            Total Urban Hospital: 7544
            <br />
            Total Urban Beds: 862346
            <br />
            Total Hospitals: 47164
            <br />
            Total Beds:  1421522
          </Card.Text>
        </Card.Body>
      <Card.Footer className="text-muted">Last updated April 26 2020</Card.Footer>
        <br />
        <div className = "grid">
         {posts}
         </div>
      </div>
    );
}
}

export default Hospital;


/*</div>Total Rural Beds:
            Total Urban Hospital:
            Total Hospitals:
            Total Beds:
            
            axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
.then(resp =>{
  console.log(resp)
  const summary = resp.data.data.summary
  const updatedSummary = summary.map(sum => {
      return {
          ...sum,
      }
})
this.setState({summary: updatedSummary}                 );
console.log(resp);
})


if(!this.state.error){
  summary = this.state.summary.map(sum => {
      return   <Card.Text>
        Total Rural Beds:
            Total Urban Hospital:
            Total Hospitals:
            Total Beds:
    </Card.Text>

})
}*/