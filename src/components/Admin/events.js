import { useState } from "react";


const Events=()=>{
    const [eventsId, setEventsId]=useState('');
    const [eventsName, setEventsName]=useState('');
    const [eventsDescription,setEventsDescription]=useState('');
    const [eventsDate, setEventsDate]=useState('');
    const [date,setDate]=useState(new Date().toDateString());
    const [msg,setMsg]=useState(false);
    const [events, setEvents]=useState([1,2,3,4,5]);

    const deleteHandler=(eventsId)=>{
        //api call
    }

    const isDisabled=()=>eventsId.trim().length===0||eventsName.trim().length()===0||eventsDescription.trim().length===0;
    return(
        <>
        <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Add New Events</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="EventsId" className="form-label">Events Id<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="EventsId" onChange={e=>setEventsId(e.target.value)} value={eventsId} placeholder="Events Id"/>
                                        
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="EventsName" className="form-label">Events Name<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="EventsName" onChange={e=>setEventsName(e.target.value)} value={eventsName} placeholder="Events Name"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="EventsDate" className="form-label">Events Date<span style={{color:"red"}}>*</span></label>
                                        <input type="date" className="form-control " id="EventsDate" onChange={e=>setEventsDate(e.target.value)} value={eventsDate} placeholder="Events Description"/>
                                        
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="EventsDescription" className="form-label">Events Description<span style={{color:"red"}}>*</span></label>
                                        <textarea type="text" className="form-control " id="EventsDescription" onChange={e=>setEventsDescription(e.target.value)} value={eventsDescription} placeholder="Events Description"/>
                                    </div>
                                    </div>
                                    </div>
                                   
                                    
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()}>Add New Events</button>
                                
                            </div>
                            {/* <span>Sign Up Successfull! , for sign in please <Link to="/">click here to login</Link></span> */}
                            {msg?<div style={{color:"green"}} >Add Successfully!</div>:null}
                        </div>
                    </div>
                </div>
        </div> 
<div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Events</h3>
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Events Id</th>
                                        <th scope="col">Events Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Date&Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((value,index)=>{
                                        return(
                                            <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td><button type="button" className="btn btn-light" onClick={e=>deleteHandler(123)}>Delete</button></td></td>
                                    </tr>
                                        );
                                    }
                                       
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Events;