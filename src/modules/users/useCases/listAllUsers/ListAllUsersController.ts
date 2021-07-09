import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const user_id3: string = user_id.toString();

    try {
      const users = this.listAllUsersUseCase.execute({ user_id: user_id3 });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { ListAllUsersController };
