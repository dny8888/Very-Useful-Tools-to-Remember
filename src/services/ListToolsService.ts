import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/prototypes/IToolsRepository';
import Tool from '../entities/Tool';

@injectable()
class ListToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(): Promise<Tool[]> {
    const tools = await this.toolsRepository.findAll();

    return tools;
  }
}

export default ListToolsService;
