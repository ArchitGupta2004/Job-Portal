import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const RecruiterSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});

const Recruiter = mongoose.model("Recruiter", RecruiterSchema);

async function test() {
  try {
    console.log("Connecting to:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    const user = await Recruiter.findOne({ email: "test@test.com" });
    console.log("FindOne successful:", user);

  } catch (err) {
    console.error("TEST SCRIPT ERROR:", err);
  } finally {
    mongoose.disconnect();
  }
}

test();
