import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/prototypes/IToolsRepository';
import Tool from '../entities/Tool';

@injectable()
class ListToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(tag: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.findAll();

    if (!tag) {
      return tools;
    }

    const filteredTools = tools.filter(tool => {
      return tool.tags.find(element => element === tag);
    });
    return filteredTools;
  }
}

export default ListToolsService;
