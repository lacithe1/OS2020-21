import { State } from "./state";
import { User } from "./user";

export interface Car {
    id: string;
    type: string;
    manufacturer: string;
    imgUrl: string;
    license: string;
    rfee: number;
    kmfee: number;
    rentedby: User;
    states: State;
}