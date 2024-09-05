import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 loginForm : any = FormGroup
formBuilder = inject(FormBuilder)
router = inject(Router)

ngOnInit(): void {
 this.loginForm =  this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
}


login(){
  const formData = this.loginForm.value
  console.log("Form Data: ", formData)
  if(formData.username === 'Satish'){
    this.router.navigate(['/userDashboard'])
  }
  if(formData.username === 'admin'){
    this.router.navigate(['/adminDashboard'])
  }
}

}
