import express from "express";
import ingredientsControllers from "../controllers/ingredientsControllers.js";

const ingredientsRouter = express.Router();

ingredientsRouter.get("/", ingredientsControllers.getAllIngredients);

export default ingredientsRouter;