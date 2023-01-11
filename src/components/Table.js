import React,{useState,useEffect} from 'react'
import { db } from "../config"
import { collection, doc, getDocs } from "firebase/firestore"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,Table, Button, IconButton} from "@mui/material"
function Tables({deleteItem}) {
  const [user,setUser] = useState([])

  async function getUsers(){
      try{
         await getDocs(collection(db,'users')).then(res=>{
                setUser(res.docs.map(doc=>({id:doc.id,...doc.data()})))

            })
        }catch {

        }
  }

useEffect(()=>{
getUsers()
  },[user])
  return (
    <Grid container>
      <TableContainer  component={Paper}>
        <Table>


        <TableHead>
          <TableRow>
            <TableCell component={'th'}>
              id
            </TableCell>
            <TableCell component={'th'}>
              name
            </TableCell>
            <TableCell component={'th'}>
              email
            </TableCell>
            <TableCell component={'th'}>
              age
            </TableCell>
            <TableCell component={'th'}>
          
                actions
             
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
          {user.length > 0 ? user.map((item,idx)=>(
         <TableRow>
          <TableCell>
              {idx+1}
          </TableCell>
          <TableCell>
            {item.name}
          </TableCell>
          <TableCell>
            {item.email}
          </TableCell>
          <TableCell>
            {item.age}
          </TableCell>
          <TableCell>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton onClick={()=>deleteItem(item.id)} color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </TableCell>
          </TableRow>
    )):<h1>No Users</h1>}
          
        </TableBody>
        </Table>
      </TableContainer>

    </Grid>
  )
}

export default Tables