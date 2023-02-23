import { Request, Response } from "express";

class HomeController {
    constructor() {

    }

    homePage(req: Request, res: Response) {
        res.render('home')
    }

    loginPage(req: Request, res: Response){
        res.render('login')
    }

    registerPage(req: Request, res: Response) {
        res.render('register')
    }
}

export default new HomeController();