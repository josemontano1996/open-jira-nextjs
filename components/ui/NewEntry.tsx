import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useState } from 'react';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onCancel = () => {
    setTouched(false);
    setIsAdding(false);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New entry'
            autoFocus
            multiline
            label='A new entry'
            helperText={inputValue.length >= 0 && touched && 'Write something'}
            value={inputValue}
            onChange={onTextFieldChange}
            error={inputValue.length >= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button variant='text' color='secondary' onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAdding(true)}
        >
          Add a new entry
        </Button>
      )}
    </Box>
  );
};
