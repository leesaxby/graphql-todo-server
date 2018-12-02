import TodoModel from './models/todo.model';

const todo = async ({ _id }) => await TodoModel.findById(_id);
const todos = async () => await TodoModel.find();

export {
    todo,
    todos,
}
