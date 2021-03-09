import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '../services/CreateToolService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;
    const createToolService = container.resolve(CreateToolService);

    const tool = await createToolService.execute({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(tool);
  }
}
