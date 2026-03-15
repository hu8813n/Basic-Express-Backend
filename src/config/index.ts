import dotenv from 'dotenv';

type ServerConfig = {
    PORT : number,

}

export function loadEnv(){
    dotenv.config();
}

export const serverConfig: ServerConfig= {
    PORT: Number(process.env.port) || 3000,
}