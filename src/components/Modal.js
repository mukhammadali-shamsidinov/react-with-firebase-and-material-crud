import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import {useForm} from 'react-hook-form'
import { addDoc,collection } from 'firebase/firestore';
import {db} from '../config'
import Swal from 'sweetalert2'
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

export default function BasicModal() {
  const {handleSubmit,reset,register} = useForm()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submit = (data)=>{
    console.log(data);
    addDoc(collection(db,'users'),{...data}).then(res=>{
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      handleClose()
    })
    reset()
  }

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Add User</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4' align='center'>Add User</Typography>
          <form onSubmit={handleSubmit(submit)}>
          <TextField {...register('name')} fullWidth type={'text'} placeholder='name' /><br/><br/>
          <TextField {...register('email')} fullWidth type={'email'} placeholder='email' /><br/><br/>
          <TextField {...register('age')} fullWidth type={'number'} placeholder='age' /><br/><br/>
          <Button type='submit'  variant='outlined' fullWidth>Add User</Button>
          </form>

        </Box>
      </Modal>
    </div>
  );
}