import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected!!");
  } catch (error) {
    console.error("❌ Failed to connect to DB:", error);
    process.exit(1); // optional: exit process if DB fails
  }
};
