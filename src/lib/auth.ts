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

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },

    },
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google", "github"],
        },
    },
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
    database: mongodbAdapter(db, {
        client,
    }),
});