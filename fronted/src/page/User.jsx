import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { UserInput } from './User.Input'
import { UserItem } from './UserItem'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../redux/auth/action'
import { TodoEdit } from './UserUpdate'

export const User = () => {
    const {user}=useSelector((store)=>store.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(user.length==0){
            dispatch(getUserData())
        }

    },[dispatch,user.length])
    
  return (
    <Box>
        <UserInput/>
        {user && user.map((cv)=><UserItem key={cv._id} id={cv.id} name={cv.name} email={cv.email} _id={cv._id} status={cv.status}/>)}
        

    </Box>
  )
}
