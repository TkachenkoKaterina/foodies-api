import express from "express";
import areasControllers from "../controllers/areasControllers.js";

const areasRouter = express.Router();

areasRouter.get("/", areasControllers.getAllAreas);

export default areasRouter;