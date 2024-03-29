import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/auth.js";
import { stripe } from "../utils/stripe.js";


export const signup = async(req,res) =>{
    const {name ,  email , password} = req.body;
    try {
        const existingUser = await users.findOne({email})
        if (existingUser){
            return res.status(404).json({message : "User already exist"})
        }
        const hashedPassword = await bcrypt.hash(password , 12);
        const stripeCustomer = await stripe.customers.create({email},{apiKey:process.env.STRIPE_SECRET_KEY})
        const newUser = await users.create({name , email , password : hashedPassword , customerStripeId : stripeCustomer.id});
        const token = jwt.sign({email : newUser.email , id : newUser._id}, "test" , {expiresIn : "1h"});
        res.status(200).json({result : newUser , token , stripeCustomerId : stripeCustomer.id})
        
    } catch (error) {
        res.status(500).json("something went wrong")
    }

}

export const login = async(req,res) =>{
    const {email , password} = req.body;
    try {
        const existingUser = await users.findOne({email})
        console.log(existingUser);
        if(!existingUser){
            return res.status(404).json({message : "User doesn't Exist"})
        }

        const isPasswordCrt = await bcrypt.compare(password , existingUser.password) ;
        if(!isPasswordCrt){
            return res.status(404).json({message : "Invalid Password"})
        }
        const token = jwt.sign({email : existingUser.email , id : existingUser.id}, "test" , {expiresIn : "1h"});
        res.status(200).json({result : existingUser , token})
        
        
    } catch (error) {
        res.status(500).json("something went wrong")
        
    }
    
}