import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '@/models';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  //we need to serialize the _id, if not we get into trouble
  return JSON.parse(JSON.stringify(entry));
};

/* export const deleteDbEntry = async (id: string) => {
  if (!isValidObjectId(id)) return;
  try {
    await db.connect();
    const result = await Entry.deleteOne({ _id: id });
    console.log(result);
  } catch (error) {
    console.error('Error deleting entry', error);
    throw new Error('Error deleting entry');
  } finally {
    await db.disconnect();
  }
};
 */