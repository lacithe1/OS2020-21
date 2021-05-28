import { getRepository } from "typeorm";
import { State } from "../entity/State";
import { Controller } from "./controller";

export class StateController extends Controller{
    repository = getRepository(State);
}