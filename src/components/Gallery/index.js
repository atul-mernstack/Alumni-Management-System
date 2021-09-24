import React, { useEffect, useState } from 'react';
import { Card, CardTitle, CardText, CardSubtitle, CardBody, CardImg } from 'reactstrap';
import './style.css';
const Gallery=()=>{
    const [gallery,setGallery]=useState([1,2,3,4,5,6.7,8]);

    useEffect(()=>{
        //api call
    });
    return(
        <div className="container top-margin bottom-margin">
            <div className="row">
                {gallery.map((value,index)=>{
                    return(
                        <div className="col-md-4 mt-4" key={index+1}>
                        <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                        {/* <CardTitle tag="h5">Image Title </CardTitle> */}
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {new Date().toDateString()}</CardSubtitle>
                    </CardBody>
                      </Card>
                      </div>
                    );
                })}
      </div>
        </div>
    );
}

export default Gallery;