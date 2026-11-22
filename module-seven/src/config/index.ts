import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.join(process.cwd(), '.env')
})

const config ={
   port: process.env.PORT,
   connection_string: process.env.DATABASE_URL as string,
   secret_key: process.env.SECRET_KEY as string,
   refresh_key: process.env.REFRESH_KEY as string
}

export default config