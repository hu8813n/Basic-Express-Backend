import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const ReuestBodyValidatior = (schema : ZodObject<any>) => {
    return async(req : Request , res: Response , next : NextFunction) => {
        try{
            console.log('Validating request body against schema');
            await schema.parseAsync(req.body)
            console.log('Request body is valid');
            next();
        }
        catch(err){
            console.error('Request body validation failed', err);
            res.status(400).json({
                message: 'Invalid Request Body',
                success: false
            })
        }
    }
}