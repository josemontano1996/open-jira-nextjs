import mongoose, { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Entry, IEntry } from '@/models';
import { db } from '@/database';

type Data = { msg: string } | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ msg: 'ID is not valid,' + id });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return searchEntry(req, res);
    case 'DELETE':
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ msg: 'Method doesnt exist' });
  }
}
const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!isValidObjectId(id)) return;

  try {
    await db.connect();
    await Entry.deleteOne({ _id: id });
    res.status(200).json({ ok: true, msg: 'Entry succesfully deleted' });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ ok: false, msg: error.errors.status.message });
  } finally {
    await db.disconnect();
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ msg: 'Entry not found' });
  }

  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ msg: error.errors.status.message });
  }
};

const searchEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const entryInDB = await Entry.findById(id);
  await db.disconnect();

  if (!entryInDB) {
    return res.status(400).json({ msg: 'Not entry found for given ID' + id });
  }

  return res.status(200).json(entryInDB);
};
