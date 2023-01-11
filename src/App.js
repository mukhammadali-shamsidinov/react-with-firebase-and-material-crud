
import { Button } from "@mui/material"
import { deleteDoc,doc, updateDoc } from "firebase/firestore"
import React, { useState } from "react"
import Swal from "sweetalert2"
import Edit from "./components/Edit"
import BasicModal from "./components/Modal"
import Modals from "./components/Modal"
import Tables from "./components/Table"
import { db } from "./config"


function App() {
    const [edit,setEdit] = useState(false)
    const [save,setSave] = useState()
    function deleteItem(id){

        deleteDoc(doc(db,'users',id)).then(res=>{
            Swal.fire("Deleted SuccessFull","","success")
        }).catch(err=>{
            Swal.fire("Eror","","error")
        })
    }

    function editItem(id,name,email,age){
        setEdit(prev=>!prev)
       setSave({id,name,email,age})
    }

    return <>
        <div style={{width:700,margin:'auto'}}>
            <h1>Hi Firebase!</h1>
            {edit ? <Edit save={save}  />:null}
          <BasicModal /><br/>
            <Tables deleteItem={deleteItem} editItem={editItem}  />

        </div>
    </>
}

export default App