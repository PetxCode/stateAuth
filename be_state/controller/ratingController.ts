import { Request, Response } from "express";
import productModel from "../model/productModel";
import userModel from "../model/userModel";
import ratingModel from "../model/ratingModel";
import { Types } from "mongoose";
import reviewModel from "../model/reviewModel";

export const createRating = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID } = req.params;
    const { rating } = req.body;

    const product = await productModel.findById(productID);

    const rate = await ratingModel.create({
      rating: parseInt(rating),
    });

    product?.ratings.push(new Types.ObjectId(rate?._id));
    product!.save();

    const getProductRatings = await productModel.findById(productID).populate({
      path: "ratings",
    });

    const rateData =
      getProductRatings?.ratings
        .map((el: any) => el.rating)
        ?.reduce((a: number, b: number) => a + b) /
      getProductRatings!.ratings!.length;

    const prod = await productModel.findByIdAndUpdate(
      productID,
      {
        rate: parseFloat(rateData.toFixed(2)),
      },
      { new: true }
    );

    // const data = [
    //   { name: "p", rate: 2 },
    //   { name: "c", rate: 5 },
    //   { name: "t", rate: 2 },
    // ];

    // console
    //   .log
    //   data
    //     .map((el) => {
    //       return el.rate;
    //     })
    //     .reduce((a: any, b: any) => {
    //       return a + b;
    //     }) / data.length
    //   ();

    return res.status(201).json({
      message: "product created",
      data: prod,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const createReview = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID, userID } = req.params;
    const { message } = req.body;

    const product = await productModel.findById(productID);

    const review = await reviewModel.create({
      message,
      userID,
    });

    product?.review.push(new Types.ObjectId(review?._id));
    product!.save();

    return res.status(201).json({
      message: "product review created",
      data: review,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const getReview = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID } = req.params;

    const product = await productModel
      .findById(productID)
      .populate({ path: "review" });

    return res.status(200).json({
      message: "product review created",
      data: product?.review,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};
