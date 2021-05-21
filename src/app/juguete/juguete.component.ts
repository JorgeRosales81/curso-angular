import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-juguete',
  templateUrl: './juguete.component.html',
  styleUrls: ['./juguete.component.css']
})
export class JugueteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { 

    this.formJuguete = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(10)]],
      marca: ["", [Validators.required, Validators.minLength(5)]],
      tipo: ["", [Validators.required, Validators.minLength(10)]]

    })

  }

  ngOnInit(): void {
  }

  save(): void{

    const data = {

      nombrejuguete: this.formJuguete.get("nombreJuguete")?.value,
      tipojuguete: this.formjuguete.get("tipoJuguete")?.value,
      marcajuguete: this.formJuguete.get("marcaJuguete")?.value

    } as JugueteRequest;

    console.log(data);

  }

}