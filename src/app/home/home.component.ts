import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { table } from 'console';
import { DataService } from '../services/data.service';
import { JugueteService } from '../services/juguete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datasource = new MatTableDataSource.Juguete();
  column = ["nombre", "tipo","marca"];

  constructor(private dataService: DataService, private juguete: JugueteService) {

    table.juguete.get
   }

  ngOnInit(): void {
  }

}
