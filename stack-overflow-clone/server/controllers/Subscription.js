import { stripe } from "../utils/stripe.js";
import users from '../models/auth.js';
import express from "express";
import { limiter} from '../middleware/limiter.js';
import { AskQuestion } from "../controllers/Questions.js";

const router = express.Router()

export const Subscriptions = async (req,res) => {
    const prices = await stripe.prices.list({
        apiKey : process.env.STRIPE_SECRET_KEY
    });

    return res.json(prices)

}



export const Session =  async (req , res )=>{
    const {email} = req.body;
    const user = await users.findOne({email})
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
        mode : 'subscription',
        payment_method_types : ['card'],
        line_items :[
            {
                price : req.body.priceId,
                quantity : 1
            }
        ],
        success_url : 'http://localhost:3000/',
        cancel_url : "http://localhost:3000/subs/prices",
        customer : user.stripeCustomerId
        
    },
        {
            apiKey : process.env.STRIPE_SECRET_KEY
        }
    );
    res.status(200).json(session)
}

export const planDetails = async(req,res) => {
    const {email} = req.body;
    const user =  await users.findOne({email});
    const subscriptions = await stripe.subscriptions.list(
        {
        customer : user.stripeCustomerId
        

        },
        {
            apiKey : process.env.STRIPE_SECRET_KEY
        }

    )
    plan = subscriptions.data[0].plan.nickname

    if (plan === "Premium"){
        router.post('/Ask' , limiter , AskQuestion)
    }


    res.json(subscriptions.data[0].plan.nickname);
    
    
}