import React, { useState, useEffect} from 'react';
import { Card, CardTitle, CardText,CardSubtitle } from 'reactstrap';
import './style.css';
const Events=()=>{
    const [events,setEvents]=useState([1,2,3,4,5,6]);

    useEffect(()=>{
        //api call
    });

    return(
        <div className="container bottom-margin top-margin">
            <div className="row">
                {events.map((value,index)=>{
                    return(
                        <div className="col-md-4 mt-4" key={index+1}>
                        <Card body inverse color="danger">
                        <CardTitle tag="h5">Events Title </CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-light">Date : {new Date().toDateString()}</CardSubtitle>
                      </Card>
                      </div>
                    );
                })}
      </div>
        </div>
    );
}

export default Events;