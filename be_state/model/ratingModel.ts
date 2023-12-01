import { Document, Types, Schema, model } from "mongoose";

interface iUser {
  rating: number;
  product: {};
}

interface iUserData extends iUser, Document {}

const ratingModel = new Schema<iUserData>(
  {
    rating: { type: Number },

    product: { type: Types.ObjectId, ref: "products" },
  },
  { timestamps: true }
);

export default model<iUserData>("ratings", ratingModel);
