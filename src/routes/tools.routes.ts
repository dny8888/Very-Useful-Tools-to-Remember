import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', toolsController.create);
toolsRouter.get('/', toolsController.index);

export default toolsRouter;
