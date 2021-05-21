import { Component } from '@angular/core';
import {MatToolbarModule}  from '@angular/material/toolbar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  showBar = false;

  constructor(private dataService: ){
    this.dataService.is<loading>.susbscribe({
      this.showBar = isLoading 
    });
  }

}
