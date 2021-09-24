import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {username, isAdmin} from '../../redux/action';
const Logout=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    useEffect(()=>{
        dispatch(isAdmin(false));
        dispatch(username(""));
        console.log("admin logout");
        history.push('/');
    });
    return(
        <>
        </>
    );
}

export default Logout;