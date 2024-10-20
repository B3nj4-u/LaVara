import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '@/lib/db';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await getUser(credentials.username);
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user.id, name: user.username };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
});