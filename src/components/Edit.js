import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { updateDoc,doc } from 'firebase/firestore';
import { db } from '../config';
import Swal from 'sweetalert2';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Edit({save,setEdit}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {register,handleSubmit} = useForm()

  function submit(data){
    
    const userRef = doc(db,"users",save.id)
    console.log(save.id);
        updateDoc(userRef,{name:data.name,email:data.email,age:data.age}).then(res=>{
          Swal.fire("edited successFull","","success")
          handleClose()
        }).catch(err=>{
          Swal.fire("error","","error")
        })
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(submit)}>
            <TextField defaultValue={save.name} {...register('name',{required:true})} fullWidth type={'text'} placeholder="name" /> <br /><br />
            <TextField defaultValue={save.email} {...register('email',{required:true})} fullWidth type={'text'} placeholder="email" /> <br /><br />
            <TextField defaultValue={save.age} {...register('age',{required:true})} fullWidth type={'number'} placeholder="age" /> <br /><br />
            <Button type='submit' fullWidth variant='contained'>upload</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}