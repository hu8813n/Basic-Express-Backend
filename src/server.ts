import express from 'express';
import { loadEnv , serverConfig}from './config';
import v1Router from './routers/v1/index.router';
import { genericErrorHandler } from './middlewares/error.middleware';


const app = express();

loadEnv();
const port: number = serverConfig.PORT;

/* * Below Line
** Registering all the routers and their cooresponding routes without app server
*/
app.use(express.json());
app.use('/api/v1', v1Router);
//app.use(todoRouter);

/* * Below Line
** Registering the error handling middleware  for global error handling
*/
app.use(genericErrorHandler)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

