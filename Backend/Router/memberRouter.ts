import { Router } from "express";
import { createMember, viewMyMember } from "../Controller/memberController";



const router: Router = Router()

router.route("/create-member/:userId").post(createMember)
router.route("/view-member/:userId").get(viewMyMember)

export default router