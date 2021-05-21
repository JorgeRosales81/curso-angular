import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ContactRequest} from '../model/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) { 

    this.formContact = this.formBuilder.group({

     nameUser: ["", [Validators.required, Validators.minLength(5)]],
     emailUser: ["", [Validators.required, Validators.email]],
     messageUser: ["", [Validators.required, Validators.minLength(10)]]

    }) 

    };
  

  ngOnInit(): void {
  }

  contact(): void{

    const username = this.formContact.get("nameUser")?.value;
    const useremail = this.formContact.get("emailUser")?.value;
    const usermessage = this.formContact.get("messageUser")?.value;

    const data = {

    name: username,
    email: useremail,
    message: usermessage
      
    } as ContactRequest;

    console.log(data);

  }

}
