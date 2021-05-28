import { Car } from "./car";

export interface User {
    id: number;
    name: string;
    idnumber: string;
    phonenumber: string;
    cars: Car[];
}