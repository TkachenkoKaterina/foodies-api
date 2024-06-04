import { getAllOwnRecipes } from "../controllers/recipesController";

const recipesRouter = express.Router();

contactsRouter.get("/", getAllOwnRecipes);

export default recipesRouter;
