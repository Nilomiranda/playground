import User from "../schemas/user";
import { GraphQLString, GraphQLNonNull } from 'graphql'
import bcrypt from 'bcrypt'

const generateHashedPassword = (password: string) => {
  return bcrypt.hash(password, 8)
}

const isEmailInUse = async (email: string, context: any) => {
  const user = await context.prisma.user.findOne({ where: { email } })
  return !!user;
}

const isUsernameInUse = async (username: string, context: any) => {
  return !!(await context.prisma.user.findOne({ where: { username } }))
}

export const createUser = () => {
  return {
    type: User,
    args: {
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (
        root: any,
        args: { username: string; email: string; password: string },
        context: any
    ) => {
      const hashedPassword = await generateHashedPassword(args.password)

      if (args.password.length < 8) {
        throw new Error('PASSWORD_LENGTH_GE_8')
      }

      if (await isEmailInUse(args.email, context)) {
        throw new Error('EMAIL_IN_USE')
      }

      if (await isUsernameInUse(args.username, context)) {
        throw new Error('USERNAME_IN_USE')
      }

      return context.prisma.user.create({ data: { ...args, password: hashedPassword } })
    }
  }
}