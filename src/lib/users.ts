import User from '@models/user';
import { IUserDb } from '@localTypes/.';
import { v4 as uuidv4 } from 'uuid';
import dbConnect from './mongoose';

export const createUser = async (email: string, name: string): Promise<IUserDb> => {
  try {
    await dbConnect();

    const user = await User.findOne({ email }).exec();

    if (user) {
      return user;
    }

    const newUser = new User({
      email,
      name,
      id: uuidv4(),
      createdAt: new Date(),
    });

    return await newUser.save();
  } catch (err) {
    console.error(err);
    return await User.findOne({ email }).exec();
  }
};

export const getUserByEmail = async (email: string): Promise<IUserDb | null> => {
  await dbConnect();

  return User.findOne({ email }).exec();
};
