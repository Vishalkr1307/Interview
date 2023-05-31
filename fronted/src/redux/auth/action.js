import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCESS } from "./actionType";
import axios from "axios"

export const addUserRequest=(payload)=>({
    type:ADD_USER_REQUEST,
    payload
})
export const addUserSucess=(payload)=>({
    type:ADD_USER_SUCESS,
    payload
})
export const addUserFailure=(payload)=>({
    type:ADD_USER_FAILURE,
    payload
})
export const getUserRequest=(payload)=>({
    type:GET_USER_REQUEST,
    payload
})
export const getUserSucess=(payload)=>({
    type:GET_USER_SUCESS,
    payload
})
export const getUserFailure=(payload)=>({
    type:GET_USER_FAILURE,
    payload
})
export const updateUserRequest=(payload)=>({
    type:UPDATE_USER_REQUEST,
    payload
})
export const updateUserSucess=(payload)=>({
    type:UPDATE_USER_SUCESS,
    payload
})
export const updateUserFailure=(payload)=>({
    type:UPDATE_USER_FAILURE,
    payload
})

export const addUserData=(payload)=>(dispatch)=>{
    dispatch(addUserRequest())
    axios.post("/users", payload).then(()=>dispatch(getUserData())).catch((err)=>dispatch(addUserFailure(err.response.data)))
    
}
export const getUserData=(payload)=>(dispatch)=>{
    dispatch(getUserRequest())
    axios.get("/users").then((res)=>dispatch(getUserSucess(res.data))).catch((err)=>dispatch(getUserFailure(err.response.data)))
}
export const updateUserData=(payload,data)=>(dispatch)=>{
    axios.put(`/users/${payload}`,data).then((res)=>dispatch(getUserData())).catch((err)=>dispatch(updateUserFailure(err.response.data)))

}