import {useState, useEffect} from 'react';
import ApiService from "../../service/ApiService";
import {useSelector} from 'react-redux';

const Jobs=()=>{
    const alumniid=useSelector(state=>state.alumniid);
    const [jobTitle,setJobTitle]=useState('');
    const [jobDescription,setJobDescription]=useState('');
    const [msg,setMsg]=useState('');
    const [jobs, setJobs] = useState([]);

    const fullDate=()=>{
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        if(month<10){
            month='0'+month;
        }
        let day=date.getDate();
        if(day<10){
            day="0"+day;
        }
        let fullDate=year+"-"+month+"-"+day;        
        return fullDate;
    }

    const updateHandler=(JobsId,Alumni_Id,Alumni_Name, JobsTitle, Jobs_Description,
         Course, Date)=>{
             
            //api call
         }

    const deleteHandler=(jobsId)=>{
        //api call
    }

    const addJobsHandler=(e)=>{
        e.preventDefault();
        
        let addJobs={title:jobTitle,jobDescription:jobDescription,postedOn:fullDate()};
        ApiService.addJobs(addJobs,alumniid)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                setJobs([...jobs,resp.data]);
                console.log("Adminjobs :"+jobs);
                //history.push('/');
            }).catch(err => {
                //  console.error(err);
                console.error("in err ", err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                //history.push('register');
            })
    }

    useEffect(()=>{
        ApiService.fetchJobs()
            .then(resp => {
                console.log("admin useeffect jobs : "+resp.data);//actual response data sent by back end
                setJobs([resp.data]);
            }).catch(err => {
                //  console.error(err);
                console.error("in err ", err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                //history.push('register');
            })
    },[]);

    const isDisabled=()=>jobTitle.trim().length===0||jobDescription.trim().length===0;

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
                                    <label htmlFor="JobTitle" className="form-label">Job Title<span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control " id="JobTitle" onChange={e=>setJobTitle(e.target.value)} value={jobTitle} placeholder="Job Title"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                    
                                    <label htmlFor="JobDescription" className="form-label">Job Descriptions<span style={{color:"red"}}>*</span></label>
                                        <textarea type="text" className="form-control " id="JobDescription" onChange={e=>setJobDescription(e.target.value)} value={jobDescription} placeholder="Job Descriptions"/>
                                    </div>
                                    </div>
                                    </div>                                  
                                    
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()} onClick={addJobsHandler}>Add New job</button>
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()}>Update job</button>
                            </div>
                            {msg?<div style={{color:"green"}} >Add Successfully!</div>:null}
                        </div>
                    </div>
                </div>
        </div> 
        <div className="container-fluid mt-3">
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
                                        <td>{value.JobsId}</td>
                                        <td>{value.Alumni_Id}</td>
                                        <td>{value.Alumni_Name}</td>
                                        <td>{value.JobsTitle}</td>
                                        <td>{value.Jobs_Description}</td>
                                        <td>{value.Course}</td>
                                        <td>{value.Date}</td>
                                        <td><button type="button" className="btn btn-light" onClick={e=>updateHandler(value.JobsId,value.Alumni_Id,
                                            value.Alumni_Name, value.JobsTitle, value.Jobs_Description, value.Course, value.Date)}>Update</button></td>
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
export default Jobs;