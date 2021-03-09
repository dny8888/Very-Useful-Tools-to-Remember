import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/prototypes/IToolsRepository';
import Tool from '../entities/Tool';

interface IRequestDTO {
  description: string;
  link: string;
  tags: string[];
  title: string;
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: IRequestDTO): Promise<Tool> {
    const tool = this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
