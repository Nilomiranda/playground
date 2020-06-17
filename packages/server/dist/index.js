"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const rootSchema_1 = require("./graphql/rootSchema");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const server = new graphql_yoga_1.GraphQLServer({
    schema: rootSchema_1.Schema,
    context: { prisma }
});
server.start(() => console.log('server running on port 4000'));
//# sourceMappingURL=index.js.map