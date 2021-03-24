import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '../services/CreateToolService';
import ListToolsService from '../services/ListToolsService';
import DeleteToolService from '../services/DeleteToolService';

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
    const tag = (request.query.tag as unknown) as string;
    // const tag = request.query.tag?.toString();

    const listToolsService = container.resolve(ListToolsService);

    const tools = await listToolsService.execute(tag);

    return response.json(tools);
  }

  public destroy(request: Request, response: Response): Response {
    const { id } = request.params;

    const deleteToolService = container.resolve(DeleteToolService);

    deleteToolService.execute(id);

    return response.status(204).send();
  }
}
