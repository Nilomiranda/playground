import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
      resolve(parent) {
        return parent.id
      },
    },
    username: {
      type: GraphQLString,
      resolve(parent) {
        return parent.username
      },
    },
    email: {
      type: GraphQLString,
      resolve(parent) {
        return parent.email
      },
    },
  }
})

export default User
