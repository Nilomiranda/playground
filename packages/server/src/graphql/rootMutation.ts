import { GraphQLObjectType } from 'graphql'
import {createUser} from "./mutations/user";

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The home of all mutation',
  fields: {
    createUser: createUser()
  }
})

export default Mutation;
