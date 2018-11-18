import data from './data';

const todo = ({ id }) => data.filter(todo => todo.id == id)[0];
const todos = () => data;
const toggleTodo = ({ id }) => {
    const updated = data.filter(todo => todo.id === id)[0];
    updated.checked = !updated.checked;
    return updated;
}

export {
    todo,
    todos,
    toggleTodo,
}
