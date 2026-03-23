import express from 'express';
import signupController from '../../controller/signup.controller';
import { ReuestBodyValidatior } from '../../validator';
import { signupSchema } from '../../validator/signup.validator';

const authRouter = express.Router();

authRouter.post('/signup', ReuestBodyValidatior(signupSchema) , signupController);

export default authRouter;