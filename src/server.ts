import express from 'express';
import { loadEnv , serverConfig}from './config';
import v1Router from './routers/v1/index.router';


const app = express();

loadEnv();
const port: number = serverConfig.PORT;

/* * Below Line
** Registering all the routers and their cooresponding routes without app server
*/
app.use('/api/v1', v1Router);
//app.use(todoRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

