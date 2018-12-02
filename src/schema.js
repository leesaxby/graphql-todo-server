export default `
type Query {
    todo(_id: String!): Todo
    todos: [Todo]
},
type Todo {
    _id: ID
    title: String
    checked: Boolean
}
type Mutation {
    toggleTodo(id: Int!): Todo
    addTodo(input: todoInput!): Todo
}
input todoInput {
    title: String!
    checked: Boolean!
}
`;
