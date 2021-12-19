import { Request, Response } from 'express';
import { GetCategoriesService } from "../services/GetCategoriesService";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const service = new GetCategoriesService();

        const categories = await service.execute();

        return response.json(categories);
    }
}