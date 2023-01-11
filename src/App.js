
import { Button } from "@mui/material"
import { deleteDoc,doc } from "firebase/firestore"
import React, { useState } from "react"
import Swal from "sweetalert2"
import BasicModal from "./components/Modal"
import Modals from "./components/Modal"
import Tables from "./components/Table"
import { db } from "./config"


function App() {

    function deleteItem(id){
        deleteDoc(doc(db,'users',id)).then(res=>{
            Swal.fire("Deleted SuccessFull","","success")
        }).catch(err=>{
            Swal.fire("Eror","","error")
        })
    }

    return <>
        <div>
            <h1>Hi Firebase!</h1>
          <BasicModal />
            <Tables deleteItem={deleteItem} />

        </div>
    </>
}

export default App