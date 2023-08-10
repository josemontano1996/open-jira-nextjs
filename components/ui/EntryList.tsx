import { FC, useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from '.';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const { isDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(id);
  };

  return (
    //TODO here we will do a drop
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0.7 : 1, transition: 'all .3' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
