"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_1 = require("./mutations/user");
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'The home of all mutation',
    fields: {
        createUser: user_1.createUser()
    }
});
exports.default = Mutation;
//# sourceMappingURL=rootMutation.js.map