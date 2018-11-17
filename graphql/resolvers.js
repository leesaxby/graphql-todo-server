import data from './data';

const todo = ({ id }) => data.filter(todo => todo.id == id)[0];
const todos = () => data;

export {
    todo,
    todos,
}
