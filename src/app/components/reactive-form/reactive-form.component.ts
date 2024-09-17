import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCalendar,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit{
 
  registerForm : any = FormGroup
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      dob : new FormControl(null),
      gender : new FormControl('Male'),
      address : new FormGroup({
        address1 : new FormControl(null),
        address2 : new FormControl(null)
      }),
      country: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      pin: new FormControl(null)
    })
  }


  onClick(){
    const formData = this.registerForm.value
    console.log("registerForm: ", formData)
  }
}
