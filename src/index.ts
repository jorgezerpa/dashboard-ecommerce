import dotenv from 'dotenv'
import express, { Application } from "express";
import cors from 'cors'
import routerApi from './routes';
import authInit from "./utils/auth";
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler'

dotenv.config()

const app:Application = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended:false}))

authInit()
routerApi(app);
cors()

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ():void => {
  console.log('app listen in port ' +  port);
});


