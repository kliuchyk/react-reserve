import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "mern",
  });

  console.log("DB Connected: ", db.connection.host);
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
