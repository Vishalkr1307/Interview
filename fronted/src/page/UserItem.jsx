import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { TodoEdit } from './UserUpdate'

export const UserItem = ({id,_id,email,name,status}) => {
  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>User-Detail List</TableCaption>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>Name</Th>
        <Th>email</Th>
        <Th>Status</Th>
        <Th>Update</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td> {email}</Td>
        <Td> {status}</Td>
        <Td><TodoEdit id={_id}/></Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
  )
}
