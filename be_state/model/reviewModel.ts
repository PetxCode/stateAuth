import { Document, Types, Schema, model } from "mongoose";

interface iUser {
  message: string;

  product: {};
  userID: string;
}

interface iUserData extends iUser, Document {}

const reviewModel = new Schema<iUserData>(
  {
    message: { type: String },
    userID: { type: String },

    product: { type: Types.ObjectId, ref: "products" },
  },
  { timestamps: true }
);

export default model<iUserData>("reviews", reviewModel);
