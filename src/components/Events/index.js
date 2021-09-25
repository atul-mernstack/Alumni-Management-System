import React, { useState, useEffect} from 'react';
import { Card, CardTitle, CardText,CardSubtitle } from 'reactstrap';
import ApiService from '../../service/ApiService';
import './style.css';
const Events=()=>{
    const [events,setEvents]=useState([]);

     useEffect(()=>{
         ApiService.fetchEvents()
             .then(resp => {
                console.log("events : "+resp.data);//actual response data sent by back end
                 //this.setState({message : 'User added successfully.'});
                 //this.props.history.push('/users');
                setEvents([resp.data]);
             }).catch(err => {
                 //  console.error(err);
                console.error("in err ", err.response.data);
                 //err.response.data => DTO on the server side : ErrorResponse
                 alert(err.response.data.message);             
                
             })
     },[]);

     
    return(
        <div className="container bottom-margin top-margin">
            <div className="row">
                {events.map((value,index)=>
                    (                        
                        <div className="col-md-4 mt-4" key={index+1}>
                        <Card body inverse color="danger">
                        <CardTitle tag="h5">{value.eventName} </CardTitle>
                    <CardText>{value.description}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-light">Date : {value.date}</CardSubtitle>
                      </Card>
                      </div>
                    )
                )}
      </div>
        </div>
    );
}

export default Events;