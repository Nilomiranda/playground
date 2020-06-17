"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = __importDefault(require("../schemas/user"));
const graphql_1 = require("graphql");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateHashedPassword = (password) => {
    return bcrypt_1.default.hash(password, 8);
};
const isEmailInUse = (email, context) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield context.prisma.user.findOne({ where: { email } });
    return !!user;
});
const isUsernameInUse = (username, context) => __awaiter(void 0, void 0, void 0, function* () {
    return !!(yield context.prisma.user.findOne({ where: { username } }));
});
exports.createUser = () => {
    return {
        type: user_1.default,
        args: {
            username: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            },
            email: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            },
            password: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            },
        },
        resolve: (root, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const hashedPassword = yield generateHashedPassword(args.password);
            if (args.password.length < 8) {
                throw new Error('PASSWORD_LENGTH_GE_8');
            }
            if (yield isEmailInUse(args.email, context)) {
                throw new Error('EMAIL_IN_USE');
            }
            if (yield isUsernameInUse(args.username, context)) {
                throw new Error('USERNAME_IN_USE');
            }
            return context.prisma.user.create({ data: Object.assign(Object.assign({}, args), { password: hashedPassword }) });
        })
    };
};
//# sourceMappingURL=user.js.map