import { Router } from "express";
import {
  createRating,
  createReview,
  getReview,
} from "../controller/ratingController";

const router: Router = Router();

router.route("/create-ratings/:productID").post(createRating);

router.route("/create-review/:userID/:productID").post(createReview);

router.route("/get-review/:productID").get(getReview);

export default router;
