import { MongoClient, Bson } from "https://deno.land/x/mongo@v1.0.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb+srv://nitin:nitin@cluster0.ybjug.mongodb.net/deno_rest?retryWrites=true&w=majority");

const db = client.database("screens")

export default db;