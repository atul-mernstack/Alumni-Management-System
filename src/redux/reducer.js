import { username } from './action';
import ActionType from './actionType';

const initialState={
    username:'',
    isAdmin:false,
    alumniid:''
}

const Reducer=(state=initialState, action)=>{
    switch(action.type){
        case ActionType.USERNAME:return{
            ...state,
            username:action.payload            
        }
        case ActionType.ISADMIN:return{
            ...state,
            isAdmin:action.payload
        }
        case ActionType.ALUMNIID:return{
            ...state,
            alumniid:action.payload
        }
        default:return state;
    }

}
export default Reducer;