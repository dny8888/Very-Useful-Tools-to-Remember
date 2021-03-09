import { container } from 'tsyringe';

import IToolsRepository from '../repositories/prototypes/IToolsRepository';
import ToolsRepository from '../repositories/typeorm/ToolsRepository';

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);
