import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/models/car';
import { CarService } from 'src/services/car.service';
import { CarListComponent } from '../car-list.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  @Input()
  car!: Car;

  constructor(private router: Router,
    private carService: CarService){}

  ngOnInit():void{}

  navigateToCarForm(id){
    this.router.navigate([ '/car-form' ], {
      queryParams: {
        id: id
      }
    })
  }

  navigateToCarList(){
    this.router.navigate([ '' ])
  }
}
