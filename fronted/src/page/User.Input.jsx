import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,option,
    Alert,AlertIcon
  } from '@chakra-ui/react';
  import {useDispatch,useSelector} from "react-redux"
import { useEffect, useReducer, useState } from 'react';
import { addUserData } from '../redux/auth/action';
  const initState={
    id:Number,
    name:String,
    email:String,
    status:String
  }
  const reducer=(store,{type,payload})=>{
    switch (type) {
        case "id":
            return {...store,id:payload}
        case "name":
            return {...store,name:payload}
        case "email":
            return {...store,email:payload}
        case "status":
            return {...store,status:payload}
        default:
            return {...store}
        
    }

  }
  
  export const UserInput=()=> {
    const [text,setText]=useReducer(reducer,initState)
    const {loading,error,user,auth}=useSelector((store)=>store.auth)
    
    
    
    
    const dispatch=useDispatch()
    const handleButton=()=>{
        dispatch(addUserData(text))
       
    }
    
      


   
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Enter Your User Detail</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                {error && loading && <Stack>
                <Alert status='error'>
                        <AlertIcon />
                        {error}
                    </Alert>
                </Stack>}
                {auth && !loading && <Stack>
                    <Alert status='success'>
                            <AlertIcon />
                            user-data is added
                        </Alert>


                    </Stack>}
            <FormControl id="id">
                <FormLabel>Id</FormLabel>
                <Input type="number"  onChange={(e)=>setText({type:"id",payload:e.target.value})} />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="string"  onChange={(e)=>setText({type:"name",payload:e.target.value})}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="string"  onChange={(e)=>setText({type:"email",payload:e.target.value})}/>
              </FormControl>
              <FormControl id="status">
                {/* <FormLabel>status</FormLabel> */}
                <Select placeholder='Select status'  onChange={(e)=>setText({type:"status",payload:e.target.value})}>
                        <option value='active'>Active</option>
                        <option value='inactive'>InActive</option>
                </Select>
                
              </FormControl>
              <Stack spacing={10}>
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleButton}>
                  ADD-User
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }