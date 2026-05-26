import mongoose from "mongoose";
import dotenv from "dotenv";
import { recruiterRegister } from "./src/auth.js";
dotenv.config();

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Mock req and res
    const req = {
      body: {
        name: "Test User",
        email: "test@test.com",
        password: "password123"
      }
    };
    
    const resp = {
      render: (view) => console.log("Rendered:", view),
      redirect: (url) => console.log("Redirected:", url),
      status: (code) => {
        console.log("Status set to:", code);
        return {
          send: (msg) => console.log("Sent:", msg)
        };
      }
    };

    console.log("Calling recruiterRegister...");
    await recruiterRegister(req, resp);
    console.log("Done calling recruiterRegister");

  } catch (err) {
    console.error("TEST SCRIPT ERROR:", err);
  } finally {
    mongoose.disconnect();
  }
}

test();
