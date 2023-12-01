import { Router } from "express";
import {
  createProduct,
  getOneProduct,
  getOneProductAndLike,
  getOneProductAndUnLike,
  getProduct,
} from "../controller/productController";

const router: Router = Router();

router.route("/create-product").post(createProduct);
router.route("/get-product").get(getProduct);

router.route("/get-one-product/:productID").get(getOneProduct);
router
  .route("/like-one-product/:userID/:productID")
  .patch(getOneProductAndLike);
router
  .route("/unlike-one-product/:userID/:productID")
  .patch(getOneProductAndUnLike);

export default router;
