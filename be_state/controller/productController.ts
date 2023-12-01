import { Request, Response } from "express";
import productModel from "../model/productModel";
import userModel from "../model/userModel";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description, price } = req.body;

    const product = await productModel.create({
      title,
      description,
      price,
      image: title.charAt(0),
    });

    return res.status(201).json({
      message: "product created",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const getProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description, price } = req.body;

    const product = await productModel.find();

    return res.status(200).json({
      message: "product found",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const getOneProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID } = req.params;

    const product = await productModel.findById(productID);

    return res.status(200).json({
      message: "product found",
      data: product,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const getOneProductAndLike = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID, userID } = req.params;

    const user = await userModel.findById(userID);
    const product = await productModel.findById(productID);

    if (user && product) {
      const check = product.like.some((el) => el === userID);

      if (check) {
        return res.status(200).json({
          message: "you've already like this product",
        });
      } else {
        const like = await productModel.findByIdAndUpdate(
          productID,
          {
            like: [...product.like, userID],
          },
          { new: true }
        );

        return res.status(200).json({
          message: "product found",
          data: like,
        });
      }
    } else {
      return res.status(404).json({
        message: "product or user not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};

export const getOneProductAndUnLike = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID, userID } = req.params;

    const user = await userModel.findById(userID);
    const product = await productModel.findById(productID);

    if (user && product) {
      const like = await productModel.findByIdAndUpdate(
        productID,
        {
          like: product.like.filter((el) => el !== userID),
        },
        { new: true }
      );

      return res.status(200).json({
        message: "product found",
        data: like,
      });
    } else {
      return res.status(404).json({
        message: "product or user not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
    });
  }
};
