import { useEffect, useState } from "react";
import ApiService from '../../service/ApiService';
import {useSelector} from 'react-redux';
const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        ApiService.fetchJobs()
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                setJobs([resp.data]);                
            }).catch(err => {
                //  console.error(err);
                console.error("in err ", err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                //history.push('register');
            },[])
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
                                        <th scope="col">Jobs Title</th>
                                        <th scope="col">Jobs Description</th>                                        
                                        <th scope="col">Date</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((value,index)=>{
                                        return(
                                            <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.jobDescription}</td>
                                        <td>{value.postedOn}</td>                                       
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