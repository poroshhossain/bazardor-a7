import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.DB_HOST;

if (!uri) {
  throw new Error("DB_HOST is not defined");
}

const client = new MongoClient(uri);
const db = client.db("bazardor-a7-db");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});