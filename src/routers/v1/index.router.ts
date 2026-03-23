import express from "express";
import pingRouter from "./ping.router";
import authRouter from "./auth.router";

const v1Router = express.Router();

// Here we will register all the v1 routes and their cooresponding handlers
// For example, if we have a ping route, we will register it here


v1Router.use('/ping' , pingRouter);
v1Router.use('/auth' , authRouter);


export default v1Router;