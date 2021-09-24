import ActionTypes from './actionType';

export const username=(inputValue="")=>{//inputValue=1
    return{
        type:ActionTypes.USERNAME,
        payload:inputValue
    }
}

export const isAdmin=(inputValue=false)=>{
    return{
        type:ActionTypes.ISADMIN,
        payload:inputValue
    }
}