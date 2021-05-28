import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/models/state';
import { User } from 'src/models/user';
import { StateService } from 'src/services/state.service';
import { CarService } from 'src/services/car.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup = this.formBuilder.group({
    id: [], 
    type: [''],
    manufacturer: [''],
    imgUrl: ['https://www.lollok.hu/wp-content/uploads/2019/11/placeholder-2.png', Validators.pattern(/^http/)],
    license: [''],
    rfee: [0, Validators.min(1)],
    kmfee:[0, Validators.min(1)],
    rentedby: [],
    states: []
  });

  users: User[];

  states: State[];

  constructor(
    private carService: CarService,
    private userService: UserService,
    private stateService: StateService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  get id(){
      return this.carForm.get('id');
    }
  
  get rfee(){
      return this.carForm.get('rfee');
  }

  get kmfee(){
    return this.carForm.get('kmfee');
  }

  get imgUrl(){
      return this.carForm.get('imgUrl');
    }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.states = await this.stateService.getAll();
    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id){
      const car = await this.carService.getCarById(id);
      this.carForm.setValue(car);
    }

  
  }

  addCar(){
    const car = this.carForm.value;
    this.carService.addCar(car);
    this.router.navigateByUrl('/');
  }

  compareUsers(user1: User, user2: User): boolean{
    return user1 && user2 && user1.id === user2.id;
  }
}
