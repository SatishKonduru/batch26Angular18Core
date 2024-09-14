import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
            CommonModule, 
            FormsModule, 
            MatCalendar,
            MatToolbarModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatRadioModule,
            MatSelectModule,
            MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
