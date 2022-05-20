import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //collect input
  name = '';
  email = '';
  mobile = '';
  hometown = '';
  art = '';
  questions = '';


  constructor() { }

  ngOnInit(): void {
  }

  signup(): void {
    console.log("Sending Formular...");

    //check for username
    if(this.name.length < 1) {
      console.log("no username");
      alert("pleaser enter a username...");
    }

    //Email check
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(this.email)) {
      console.log("email invalid");
      alert("Please enter a valid email.");
    };

    if(this.name.length > 1 && (regex.test(this.email))) {
      console.log("valid data");
      alert("Thank you! We will come back to you soon!");

      //READY FOR PHP REQUEST --> 

      /*
      
      Data: 
      
      name = Name - string
      email = Email - string 
      mobile = Telefonnummer - string
      hometown = Stadt - string
      art = was für Kunst? - string
      questions = offene Fragen? - string
      
      */


    } else {
      console.log("something went wrong");
    }
  }

}

