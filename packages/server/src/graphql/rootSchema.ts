import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql'
import User from "./schemas/user";

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      users: {
        type: new GraphQLList(User),
        resolve(root, args, context, info) {
          return context.prisma.user.findMany()
        },
      },
    },
  })
})