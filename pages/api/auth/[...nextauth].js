import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import MongoClientPromise from "../../../lib/mongodb";

const options = {
  site: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(MongoClientPromise),
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
        from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // the session will last 30 days
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
