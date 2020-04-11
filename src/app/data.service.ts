import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";

  constructor(private http:HttpClient) { }

  getUsers()
  {
    return this.http.get<User[]>(this.apiUrl)
  }
}
