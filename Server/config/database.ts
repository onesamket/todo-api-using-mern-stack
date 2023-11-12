// db.ts

import mongoose from 'mongoose';
import { mongoURI } from './config';

function connectToDB() {
  mongoose.connect(mongoURI);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

export default connectToDB;
