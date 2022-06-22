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
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  todos: {
    type: [{
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: String,
      done: {
        type: Boolean,
        default: false,
      },
      createdAt: {
        type: String,
        required: true,
      },
      updatedAt: {
        type: String,
        required: true,
      },
    }],
  },
});

const List = mongoose.models.List || mongoose.model('List', listSchema);

export default List;
