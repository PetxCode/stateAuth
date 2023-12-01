import { Document, Types, Schema, model } from "mongoose";

interface iUser {
  title: string;
  description: string;
  price: number;
  image: string;
  rate: number;
  ratings: Array<{}>;
  review: Array<{}>;
  like: Array<string>;
}

interface iUserData extends iUser, Document {}

const productModel = new Schema<iUserData>(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    image: { type: String },
    rate: { type: Number },
    ratings: [{ type: Types.ObjectId, ref: "ratings" }],
    review: [{ type: Types.ObjectId, ref: "reviews" }],
    like: { type: [] },
  },
  { timestamps: true }
);

export default model<iUserData>("products", productModel);
