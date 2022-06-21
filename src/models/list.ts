import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  isFreezed: {
    type: Boolean,
    default: false,
  },
  todos: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
  },
});

const List = mongoose.models.List || mongoose.model('List', listSchema);

export default List;
