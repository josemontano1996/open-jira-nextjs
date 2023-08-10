import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);

  const { isAddingEntry, openNewNote, closeNewNote } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setInputValue(event.target.value);
  };

  const onCancel = () => {
    closeNewNote();
    setInputValue('');
    setTouched(false);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setTouched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New entry'
            autoFocus
            multiline
            label='A new entry'
            helperText={inputValue.length <= 0 && touched && 'Write something'}
            value={inputValue}
            onChange={onTextFieldChange}
            error={inputValue.length <= 0 && touched}
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
          onClick={openNewNote}
        >
          Add a new entry
        </Button>
      )}
    </Box>
  );
};
