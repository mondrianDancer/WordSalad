import express from "express";
import routes from "../routes";
import { words, upload, editWord, deleteWord } from "../controllers/wordController";

const wordRouter = express.Router();

wordRouter.get(routes.words, words);
wordRouter.get(routes.upload, upload);
wordRouter.get(routes.editWord, editWord);
wordRouter.get(routes.deleteWord, deleteWord);

export default wordRouter;