import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  }

  // Use existing database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB Connected: ", db.connection.host);
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
