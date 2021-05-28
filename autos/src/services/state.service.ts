import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<State[]>('/api/states').toPromise();
  }
}