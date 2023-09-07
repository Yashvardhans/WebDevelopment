import express from "express";
import { login , signup } from "../controllers/auth.js";
import auth from "../middleware/auth.js";
import {updateProfile} from "../controllers/users.js"
import { getAllusers } from "../controllers/users.js";


const router = express.Router() ;

router.post('/signup', signup)

router.post('/login', login)

router.get('/getAllUsers' , getAllusers)

router.patch('/update/:id' , auth , updateProfile)

export default router