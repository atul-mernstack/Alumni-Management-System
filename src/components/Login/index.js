import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {username,isAdmin} from '../../redux/action';
import './style.css';
const Login=()=>{
    //const username1=useSelector(state=>state.username);
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const [msg,setMsg]=useState(false);
    const history=useHistory();
    const dispatch=useDispatch();

    const loginHandler=(e)=>{
        e.preventDefault();
        let user={userName:userName,password:password};
        if(role==='admin'){
            dispatch(username("atul123"));
            dispatch(isAdmin(true));            
            history.push('/admin');
        }else{
            dispatch(username("atul123"));
            history.push('/');
        }
    }

    const isDisabled=()=>userName.trim().length===0||password.trim().length===0;
    return(
        <div className="container top-margin bottom-margin">
                <div className="row justify-content-center">
                    <div className="col-md-6 offset-0">
                        <div className="row shadow-lg p-3 mb-5 bg-white rounded">                           
                        <h3 className="head-txt mb-3 text-center">User login</h3>
                        
                            <div className="form-group">
                                <label htmlFor="Usermobile" className="form-label"> Username<span style={{color:"red"}}>*</span> </label>
                                <input type="text" className="form-control " id="Usermobile" onChange={e=>setUserName(e.target.value)} value={userName} placeholder="Enter email"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="Userpass" className="form-label"> Enter Password<span style={{color:"red"}}>*</span> </label>
                                <input type="Password" className="form-control " id="Userpass" onChange={e=>setPassword(e.target.value)} value={password} placeholder=" Enter Password"/>
                            </div>
                            <div className="form-group">
                                <span>New user <Link to="/register">click here</Link></span>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-danger mt-1" disabled={isDisabled()} onClick={loginHandler}>Login</button>
                                
                            </div>
                            {msg?<span style={{color:"green"}}>Login Successfull! <Link to="/">click here</Link> to go ahead.</span>:null}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
    );
}

export default Login;