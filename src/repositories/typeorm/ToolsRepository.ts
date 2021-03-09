import { getRepository, Repository } from 'typeorm';
import Tool from '../../entities/Tool';

import IToolsRepository from '../prototypes/IToolsRepository';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      title,
      description,
      link,
      tags,
    });

    await this.ormRepository.save(tool);
    return tool;
  }

  public async findAll(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }
}
export default ToolsRepository;
