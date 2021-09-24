import { useEffect, useState } from "react";

const JobsSearch=()=>{
    const [alumniName,setAlumniName]=useState('');
    const [courseName,setCourseName]=useState('');
    const [jobId,setJobId]=useState('');
    const [jobTitle,setJobTitle]=useState('');
    const [filterJobs,setFilterJobs]=useState([{
        "JobsId": 123, "Alumni_Id": 123, "Alumni_Name": "Abcd", "JobsTitle": "Application Developer",
        "Jobs_Description": "csfbjssjdnisdnsmc jksndac xnck", "Course": "Cs","Date":"22/09/2021"
    }]);

    useEffect(()=>{
        //api call
    });

    const deleteHandler=(JobsId)=>{
        // apicall
    }
    return(
        <>
<div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">JobsSearch</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="AlumniName" className="form-label">Search By Alumni Name<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="AlumniName" onChange={e=>setAlumniName(e.target.value)} value={alumniName} placeholder="Search By Alumni Name"/>
                                        
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="CourseName" className="form-label">Search By Course Name<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="CourseName" onChange={e=>setCourseName(e.target.value)} value={courseName} placeholder="Search By Course Name"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="JobId" className="form-label">Search By Job Id<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="JobId" onChange={e=>setJobId(e.target.value)} value={jobId} placeholder="Search By Job Id"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="JobTitle" className="form-label">Search By Job Title<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="JobTitle" onChange={e=>setJobTitle(e.target.value)} value={jobTitle} placeholder="Search By Job Title"/>
                                    
                                    </div>
                                    </div>
                                    </div>                                   
                                    
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                                <button type="button" className="btn btn-danger mt-1">JobsSearch</button>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div> 
        <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Filter Jobs</h3>
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Jobs Id</th>
                                        <th scope="col">Alumni Id</th>
                                        <th scope="col">Alumni Name</th>
                                        <th scope="col">Jobs Title</th>
                                        <th scope="col">Jobs Description</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterJobs.map((value,index)=>{
                                        return(
                                            <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{value.JobsId}</td>
                                        <td>{value.Alumni_Id}</td>
                                        <td>{value.Alumni_Name}</td>
                                        <td>{value.JobsTitle}</td>
                                        <td>{value.Jobs_Description}</td>
                                        <td>{value.Course}</td>
                                        <td>{value.Date}</td>
                                        <td><button type="button" className="btn btn-light" onClick={e=>deleteHandler(value.JobsId)}>Delete</button></td>
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
export default JobsSearch;