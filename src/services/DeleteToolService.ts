import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/prototypes/IToolsRepository';
// import Tool from '../entities/Tool';

@injectable()
export default class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public execute(id: string): void {
    this.toolsRepository.deleteById(id);
  }
}
