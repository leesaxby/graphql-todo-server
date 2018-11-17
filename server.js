import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import schemaStr from './graphql/schema';
import {
    todo,
    todos,
} from './graphql/resolvers';

const schema = buildSchema(schemaStr);

const rootValue = {
    todo,
    todos,
};

const app = express();
app.use('/graphql', expressGraphql({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(4000, () => console.log('Server running at localhost:4000/graphql'));