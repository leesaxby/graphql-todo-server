export default `
type Query {
    todo(id: Int!): Todo
    todos: [Todo]
},
type Mutation {
    toggleTodo(id: Int!): Todo
    addTodo(input: todoInput!): Todo
}
input todoInput {
    title: String!
    checked: Boolean!
}
type Todo {
    id: Int
    title: String
    checked: Boolean
}
`;
