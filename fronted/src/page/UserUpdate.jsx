import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,option, Stack
  } from '@chakra-ui/react'
  import React, { useReducer } from 'react'
  import { EditIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../redux/auth/action'


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


export const TodoEdit = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [text,setText]=useReducer(reducer,initState)
    const dispatch=useDispatch()
    const handleUpdate=()=>{
        
        dispatch(updateUserData(id,text))
        onClose()

    }
    
    return (
      <>
         <IconButton variant={'ghost'} icon={<EditIcon/>} boxSize={8} colorScheme='blue' onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update-Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
            <Stack spacing={4}>
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
              </Stack>
              
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='solid' onClick={handleUpdate}>Update-User</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
