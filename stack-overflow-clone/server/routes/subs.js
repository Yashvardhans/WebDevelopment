import express from "express";
import auth from "../middleware/auth.js";
import { Subscriptions, Session, planDetails} from "../controllers/Subscription.js";




const router = express.Router()

router.get('/prices',  Subscriptions )

router.post('/session'  , Session)

router.get('/subscription' , planDetails)

export default router