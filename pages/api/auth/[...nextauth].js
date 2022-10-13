import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  //The adapter to the database we will use to store the data
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "tony-airways",
  }), //The providers are the autentication method
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
});
