import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter"; 
import userRouter from "./routers/userRouter";
import wordRouter from "./routers/wordRouter"; 

const app = express();

//middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.words, wordRouter);

export default app;
