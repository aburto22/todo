/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof import('mongoose') | null,
    promise: Promise<typeof import('mongoose')> | null,
  };
}

const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  throw new Error('Missing mongo uri');
}

let cached = global.mongoose;

if (!cached) {
  global.mongoose = { conn: null, promise: null };
  cached = global.mongoose;
}

const dbConnect = async () => {
  if (process.env.NODE_ENV === 'production') {
    return mongoose.connect(MONGO_URI);
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, options);
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
