import data from './data';

const todo = ({ id }) => data.filter(todo => todo.id == id)[0];

const todos = () => data;

const toggleTodo = ({ id }) => {
    const updated = data.filter(todo => todo.id === id)[0];
    updated.checked = !updated.checked;
    return updated;
}

const addTodo = ({ input: { title, checked } }) => {
    const id = Math.max( ...data.map(({ id }) => id ) ) + 1;
    return {
        id,
        title,
        checked,
    };
}

export {
    todo,
    todos,
    toggleTodo,
    addTodo,
}
