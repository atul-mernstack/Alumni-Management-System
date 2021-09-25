import { useState } from 'react';
import {useHistory } from 'react-router-dom';

import ApiService from "../../service/ApiService";

const Register = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    //const [courseId, setCourseId] = useState('');
    const [course, setCurse] = useState('');
    //const [courseDuration, setCourseDuration] = useState('');
    const [passingYear, setPassingYear] = useState('');
    const [role, setRole] = useState('ALUMINI');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    //const [date, setDate] = useState(new Date().toDateString());
    //const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState(0);
    //const [notMatch, setNotmatch] = useState(false);
    const [msg, setMsg] = useState(false);
    let history=useHistory();

    const fullDate=()=>{
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth();
        let day=date.getDate();
        let fullDate=year+"-"+month+"-"+day;
        return fullDate;
    }

    const signUpHandler = (e) => {
        e.preventDefault();       
        console.log("fulldate : "+fullDate());
        let alumni={firstName:fName,lastName:lName,email:email,userName:userName,mobileNo:mobile,password:password,
        passingYear:passingYear,role:role,course:{courseName:course}};
        ApiService.addUser(alumni)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end                
                history.push('login');
            }).catch(err => {
                //  console.error(err);
                console.error("in err ", err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
                alert(err.response.data.message);             
                history.push('register');
            })
    }

    const isDisabled = () => lName.trim().length === 0 || lName.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 ||
        mobile.trim().length === 0 || address.trim().length === 0;

    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                            <h3 className="head-txt mb-3 text-center">New Registration</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="fName" className="form-label">First Name<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="fName" onChange={e => setFName(e.target.value)} value={fName} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="lName" className="form-label">Last Name<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="lName" onChange={e => setLName(e.target.value)} value={lName} placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Username" className="form-label">User Name<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="Username" onChange={e => setUserName(e.target.value)} value={userName} placeholder="User Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Useremail" className="form-label"> Email Id<span style={{ color: "red" }}>*</span></label>
                                        <input type="email" className="form-control " id="Useremail" onChange={e => { setEmail(e.target.value); setError(0) }} value={email} placeholder="Email Id" />
                                        {error ? <p style={{ color: "red", fontStyle: "italic" }}>Email already exist!</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Usermobile" className="form-label"> Mobile No.<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="Usermobile" onChange={e => setMobile(e.target.value)} value={mobile} placeholder="Mobile No." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="CourseName" className="form-label"> Course Name<span style={{ color: "red" }}>*</span></label>
                                        <select className="form-select" onChange={e => setCurse(e.target.value)} value={course} aria-label="Default select example">
                                            <option defaultValue>Select course name</option>
                                            <option value="e-DAC">e-DAC</option>
                                            <option value="e-DAI">e-DAI</option>
                                            <option value="e-DBDA">e-DBDA</option>
                                            <option value="e-DESD">e-DESD</option>
                                            <option value="e-DITISS">e-DITISS</option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="PassingYear" className="form-label"> Passing Year<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="PassingYear" onChange={e => setPassingYear(e.target.value)} value={passingYear} placeholder="Passing Year" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Role" className="form-label"> Role<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" readOnly className="form-control " id="Role" onChange={e => setRole(e.target.value)} value={role} placeholder="Role" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Useraddress" className="form-label">Full Address<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="Useraddress" onChange={e => setAddress(e.target.value)} value={address} placeholder="Full Address" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="City" className="form-label"> City<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="City" onChange={e => setCity(e.target.value)} value={city} placeholder="Mobile No." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="State" className="form-label"> State<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="State" onChange={e => setState(e.target.value)} value={state} placeholder="State" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Country" className="form-label"> Country<span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control " id="Country" onChange={e => setCountry(e.target.value)} value={country} placeholder="Country" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Userpass" className="form-label"> Create Password<span style={{ color: "red" }}>*</span></label>
                                        <input type="Password" className="form-control " id="Userpass" onChange={e => setPassword(e.target.value)} value={password} placeholder=" Create Password" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">

                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()} onClick={signUpHandler}>Sign Up</button>

                            </div>
                            
                            {msg ? <div style={{ color: "green" }} >Sign Up Successfully!</div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;