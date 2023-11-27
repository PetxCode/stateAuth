import mongoose from "mongoose";
const URL: string = "mongodb://127.0.0.1:27017/authStateDB";

export const dbConfig = async () => {
  try {
    await mongoose.connect(URL).then(() => {
      try {
        console.log("db connected");
      } catch (error) {
        return error;
      }
    });
  } catch (error) {
    return error;
  }
};
