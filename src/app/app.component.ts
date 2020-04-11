import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  users$: User[];
  constructor(private dataService: DataService){}

  ngOnInit(){

    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data)
  }
}
