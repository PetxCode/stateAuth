import { Application, Request, Response } from "express";
import auth from "./router/userRouter";
import product from "./router/productRouter";
import ratings from "./router/ratingRoute";
export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1/auth", auth);
    app.use("/api/v1/product", product);
    app.use("/api/v1/ratings", ratings);

    app.get("/", (req: Request, res: Response): Response => {
      try {
        return res.status(200).json({
          message: "Welcome to our API",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
