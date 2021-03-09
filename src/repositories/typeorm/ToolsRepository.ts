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
    description,
    link,
    tags,
    title,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      description,
      link,
      tags,
      title,
    });
    await this.ormRepository.save(tool);
    return tool;
  }
}
export default ToolsRepository;
