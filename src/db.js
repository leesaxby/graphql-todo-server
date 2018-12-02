import mongoose from 'mongoose';
import connStr from '../mdb-connection';

const { ObjectId } = mongoose.Types;

mongoose.connect(connStr);
mongoose.Promise = global.Promise;

// Convert mongodb idobject.
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

export default mongoose.connection;

