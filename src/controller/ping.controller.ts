import { Request, Response } from 'express';
import fs from 'fs/promises';
import { InternalServerError } from '../utils/errors/app.error';
export const pingHandler = async (req: Request , res: Response) => {
    
   try{
     await fs.readFile('sample');
     res.send('pong');
   }
   catch(err){
     console.log('Error reading file', err);
     throw new InternalServerError('Failed to read file');
   }
}