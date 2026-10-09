import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbUri = process.env.DB_HOST || "mongodb+srv://placeholder:placeholder@cluster.mongodb.net/test";
const client = new MongoClient(dbUri);
const db = client.db("bazardor-a7-db");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});