import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Controller } from "./controller";

export class UserController extends Controller{
    repository = getRepository(User);

    getAll = async (req,res) =>{
        try{
            const entities = await this.repository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.cars','cars')
            .getMany();
            res.json(entities);
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }

}

