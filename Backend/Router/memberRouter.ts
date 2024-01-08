import { Router } from "express";
import { createMember, viewMyMember, loginMember } from "../Controller/memberController";



const router: Router = Router()

router.route("/create-member/:userId").post(createMember)
router.route("/view-member/:userId").get(viewMyMember)
router.route("/login-member/:userId").post(loginMember)

export default router;