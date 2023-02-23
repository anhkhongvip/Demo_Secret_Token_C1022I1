import { Request, Response } from "express";

class AdminController {
    constructor() {

    }

    adminPage(req: Request, res: Response) {
        res.render('admin')
    }

}

export default new AdminController();