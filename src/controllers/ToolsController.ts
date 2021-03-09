import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '../services/CreateToolService';
import ListToolsService from '../services/ListToolsService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const listToolsService = container.resolve(ListToolsService);
    const tools = await listToolsService.execute();

    return response.json(tools);
  }
}
