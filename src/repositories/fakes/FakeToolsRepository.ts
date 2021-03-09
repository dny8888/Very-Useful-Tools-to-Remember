import { uuid } from 'uuidv4';

import Tool from '../../entities/Tool';
import IToolsRepository from '../prototypes/IToolsRepository';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

class FakeToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid(), title, description, link, tags });

    this.tools.push(tool);

    return tool;
  }
}

export default FakeToolsRepository;
