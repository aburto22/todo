import User from '@models/user';
import { IUserDb } from '@localTypes/.';
import { v4 as uuidv4 } from 'uuid';
import dbConnect from './mongoose';

export const createUser = async (email: string, name: string): Promise<IUserDb> => {
  await dbConnect();

  const newUser = new User({
    email,
    name,
    id: uuidv4(),
    createdAt: new Date(),
  });

  return newUser.save();
};

export const getUserByEmail = async (email: string): Promise<IUserDb | null> => {
  await dbConnect();

  return User.findOne({ email }).exec();
};
