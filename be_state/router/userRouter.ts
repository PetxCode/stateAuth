import { Router } from "express";
import {
  createUser,
  getOneUser,
  signInUser,
  updateOneUser,
  verifyUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/sign-in-user").post(signInUser);

router.route("/verify-user").patch(verifyUser);

router.route("/get-one-user/:userID").get(getOneUser);
router.route("/update-one-user/:userID").patch(updateOneUser);

export default router;
