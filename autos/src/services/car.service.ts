import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {  }

  async loadCars() {
    return this.http.get<Car[]>('/api/cars').toPromise();
  }

  async filterCars(search: string, search2: string){
    return this.http.get<Car[]>('/api/cars', {
      params: {search , search2}
    }).toPromise();
  }

  async addCar(car: Car){
    return this.http.post<Car>('/api/cars', car).toPromise();
  }

  async getCarById(id: string){
    return this.http.get<Car>('/api/cars/' + id).toPromise();
  }

  async deleteCar(id:string){
    return this.http.delete<Car>('/api/cars/'+ id).toPromise();
  }
}
