import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
const AddJobs=()=>{
    const username=useSelector(state=>state.username);
    const [alumniId,setAlumniId]=useState('');
    const [alumniName, setAlumniName]=useState('');
    const [jobTitle,setJobTitle]=useState('');
    const [jobDescription,setJobDescription]=useState('');
    const [course,setCourse]=useState('');
    const [msg,setMsg]=useState('');
    const [jobId,setJobId]=useState('');
    const [jobs, setJobs] = useState([1,2,3,4,5]);

    useEffect(()=>{
        //api call for view jobs
    });

    const deleteHandler=(JobsId)=>{
        //Api call for jobs delete
    }

    const updateHandler=(JobsId)=>{

        let jobUpdate={alumniId:username,alumniName:alumniName,jobTitle:jobTitle,jobDescription:jobDescription,course:course};
    }

    const addJobsHandler=(e)=>{
        e.preventDefault();
        let addJobs={alumniId:username,alumniName:alumniName,jobTitle:jobTitle,jobDescription:jobDescription,course:course,date:new Date().toDateString()};
    }
    const isDisabled=()=>alumniId.trim().length===0|| alumniName.trim().length===0||jobTitle.trim().length===0||jobDescription.trim().length===0||
    course.trim().length===0;
    return(
        <>
        <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Register New Jobs</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="AlumniId" className="form-label">Alumni Id<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="AlumniId" onChange={e=>setAlumniId(e.target.value)} value={alumniId} placeholder="Alumni Id"/>
                                        
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="AlumniName" className="form-label">Alumni Name<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="AlumniName" onChange={e=>setAlumniName(e.target.value)} value={alumniName} placeholder="Alumni Name"/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="JobTitle" className="form-label">Job Title<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="JobTitle" onChange={e=>setJobTitle(e.target.value)} value={jobTitle} placeholder="Job Title"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="Course" className="form-label">Course<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="JobTitle" onChange={e=>setCourse(e.target.value)} value={course} placeholder="Course"/>
                                    </div>
                                    </div>
                                    </div>
                                   
                                    <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="JobDescription" className="form-label">Job Descriptions<span style={{color:"red"}}>*</span></label>
                                        <textarea type="text" className="form-control " id="JobDescription" onChange={e=>setJobDescription(e.target.value)} value={jobDescription} placeholder="Job Descriptions"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    
                                    </div>
                                    </div>
                                    </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()}>Add New job</button>
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()}>Update job</button>
                            </div>
                            
                            {msg?<div style={{color:"green"}} >Add Successfully!</div>:null}
                        </div>
                    </div>
                </div>
        </div> 

        <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">Jobs Update</h3>
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
                                        <th scope="col">...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((value,index)=>{
                                        return(
                                            <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button type="button" className="btn btn-danger" onClick={e=>updateHandler(123)}>Update</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={e=>deleteHandler(123)}>Delete</button></td>
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
    );
}

export default AddJobs;