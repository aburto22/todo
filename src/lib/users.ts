import User from '@models/user';
import { IUserDb } from '@localTypes/server';
import dbConnect from './mongoose';

export const createUser = async (email: string, name: string): Promise<IUserDb> => {
  try {
    await dbConnect();

    const user = await User.findOne<IUserDb>({ email }).exec();

    if (user) {
      return user;
    }

    const newUser = new User({
      email,
      name,
      createdAt: new Date(),
    });

    return await newUser.save();
  } catch (err) {
    return await User.findOne({ email }).exec();
  }
};

export const getUserByEmail = async (email: string): Promise<IUserDb | null> => {
  await dbConnect();

  return User.findOne<IUserDb>({ email }).exec();
};
