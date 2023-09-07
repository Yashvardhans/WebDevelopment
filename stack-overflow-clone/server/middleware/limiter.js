import rateLimit  from "express-rate-limit";
import { planDetails } from "../controllers/Subscription.js";

export const limiter = rateLimit ({
    windowMs : 24*60*60*1000,
    max :1,
    message : "Upgrade your plan"
})

export const silverLimiter = rateLimit({
    windowMs : 24*60*60*1000,
    max : 5,
    message : "Upgrade your plan to gold to ask more questions"
})

export const goldLimiter = rateLimit({
    windowMs : 24*60*60*1000,
    max : 100000
})

