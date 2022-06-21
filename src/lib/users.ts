import User from '@models/user';
import { IUserDb } from '@localTypes/.';
import dbConnect from './mongoose';

export const createUser = async (email: string, name: string): Promise<IUserDb> => {
  await dbConnect();

  const newUser = new User({
    email,
    name,
  });

  return newUser.save();
};

export const getUserByEmail = async (email: string): Promise<IUserDb | null> => {
  await dbConnect();

  return User.findOne({ email }).exec();
};
