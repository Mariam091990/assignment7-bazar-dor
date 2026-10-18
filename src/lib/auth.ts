import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db("bazar-dor");

export const auth = betterAuth({

  emailAndPassword: {
    enabled: true,
  },

 
    socialProviders: {
      google: {


        clientId: process.env.google_oauth_client_id as string,
        clientSecret: process.env.google_oauth_client_secret as string,
        
      },
      github: {
        clientId: process.env.Github_Client_ID as string,
        clientSecret: process.env.Github_Client_Secret as string,
      },  

    },
   	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["google", "github"] // Add your providers
		}
	},


    database: mongodbAdapter(db, {
      client,
    }),
  });