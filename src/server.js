import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import db from './db';
import schemaStr from './schema';
import 'babel-polyfill';

import {
    todo,
    todos,
} from './resolvers';

const app = express();
const schema = buildSchema(schemaStr);
const rootValue = {
    todo,
    todos,
};

app.use('/graphql', expressGraphql({
    schema,
    rootValue,
    graphiql: true
}));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(4000, () => console.log('Server running at localhost:4000/graphql'));