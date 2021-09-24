import { useEffect, useState } from "react";

const ViewJobs = () => {
    const [jobs, setJobs] = useState([{
        "JobsId": 123, "Alumni_Id": 123, "Alumni_Name": "Abcd", "JobsTitle": "Application Developer",
        "Jobs_Description": "csfbjssjdnisdnsmc jksndac xnck", "Course": "Cs","Date":"22/09/2021"
    }]);

    useEffect(()=>{
        //api call for view jobs
    });

    return (
        <>
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

export default ViewJobs;