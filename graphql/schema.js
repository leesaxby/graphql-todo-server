export default `
type Query {
    todo(id: Int!): Todo
    todos: [Todo]
},
type Mutation {
    toggleTodo(id: Int!): Todo
}
type Todo {
    id: Int
    title: String
    checked: Boolean
}
`;
