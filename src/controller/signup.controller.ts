import { Request, Response } from "express";

const signupController = (req :Request , res :Response) => {
    try{
        const { username , email , password , confirmPassword } = req.body;
        // Here we will add the logic to handle the signup request

        if(password !== confirmPassword){
            return res.status(400).json({message : 'Password and confirm password do not match'})
        }

        res.status(201).json({
            message : 'User created successfully',
            username : username,
            email : email,

        })

    }catch(err){
        res.status(500).json({message : 'Internal Server Error'})
    }
}

export default signupController;