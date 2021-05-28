import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/services/car.service';
import { Car } from 'src/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  searchQuery: string='';
  searchQuery2: string='';
  
  listAvailable = false;

  constructor(private carService: CarService) { }

  async ngOnInit() {
    this.cars = await this.carService.loadCars();
  }

  
  async search(){
    this.cars = await this.carService.filterCars(this.searchQuery,this.searchQuery2);
  }
}