import User from '@models/user';
import dbConnect from './mongoose';

export const createUser = async (email: string, name: string) => {
  await dbConnect();

  const newUser = new User({
    email,
    name,
  });

  return newUser.save();
};

export const getUserByEmail = async (email: string) => {
  await dbConnect();

  return User.find({ email }).exec();
};
