"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const User = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: graphql_1.GraphQLID,
            resolve(parent) {
                return parent.id;
            },
        },
        username: {
            type: graphql_1.GraphQLString,
            resolve(parent) {
                return parent.username;
            },
        },
        email: {
            type: graphql_1.GraphQLString,
            resolve(parent) {
                return parent.email;
            },
        },
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map