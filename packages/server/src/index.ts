import { GraphQLServer } from 'graphql-yoga'
import {Schema} from "./graphql/rootSchema";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const server = new GraphQLServer({
  schema: Schema,
  context: { prisma }
})

server.start(() => console.log('server running on port 4000'))