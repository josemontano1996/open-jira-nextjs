import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry = () => {
  return (
      <Box sx={{marginBottom: 2, paddingX: 2}}>
         
      <Button startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth variant='outlined'>
        Add a new entry
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder='New entry'
        autoFocus
        multiline
        label='A new entry'
        helperText='Write something'
      />

      <Box display='flex' justifyContent='space-between'>
        <Button variant='text' color='secondary'>
          Cancel
        </Button>
        <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon />}>
          Save
        </Button>
      </Box>
    </Box>
  );
};
