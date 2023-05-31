import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCESS, UPDATE_USER_FAILURE } from "./actionType"

const init={
    loading:false,
    error:"",
    user:[],
    auth:false
}

export const authReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_USER_REQUEST:
            return {...store,loading:true}
        case ADD_USER_SUCESS:
            return {...store,loading:false,auth:true}
        case ADD_USER_FAILURE:
            return {...store,loading:true,error:payload}
        case GET_USER_REQUEST:
            return {...store,loading:true}
        case GET_USER_SUCESS:
            return {...store,loading:false,user:payload,auth:true}
        case GET_USER_FAILURE:
            return {...store,loading:true,error:payload}
        case UPDATE_USER_FAILURE:
            return {...store,loading:true,error:payload}
        default:
            return {...store}
    }


}