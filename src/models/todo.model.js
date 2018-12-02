import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    title: {type: String, required: true, max: 50},
    checked: {type: Boolean, required: true},
});

export default mongoose.model('Todo', TodoSchema);