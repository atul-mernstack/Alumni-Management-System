import { username } from './action';
import ActionType from './actionType';

const initialState={
    username:'',
    isAdmin:false
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
        default:return state;
    }

}
export default Reducer;