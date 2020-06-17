"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const graphql_1 = require("graphql");
const user_1 = __importDefault(require("./schemas/user"));
exports.Schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            users: {
                type: new graphql_1.GraphQLList(user_1.default),
                resolve(root, args, context, info) {
                    return context.prisma.user.findMany();
                },
            },
        },
    })
});
//# sourceMappingURL=rootSchema.js.map