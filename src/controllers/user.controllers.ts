import { User } from "../models/User";
import { AppDataSource } from "../configs/data-source";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserController {
  private userRepository: any;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  register = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      await this.userRepository.save({
        username,
        password: passwordHash,
      });
      res.status(200).json({ message: "Register success" });
    } catch (error) {
      console.log(error);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await this.userRepository.findOneBy({ username });
      if(user) {
        bcrypt.compare(password, user.password, function(err, same) {
          if(same) {
            let token = jwt.sign({
              iss: "Dinh Hung",
              sub: user.id,
              iat: new Date().getTime()
            }, process.env.USER_CODE_SECRET);
            res.cookie("authorization", "Bearer " + token, {signed: true})
            res.status(200).json({message: "Login success", token, user});
          }
          else {
            res.status(400).json({"message": "username or password incorrect"});
          }
        })
      }
      else {
        res.status(400).json({"message": "Invalid username or password"});
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };
}

export default new UserController();
