import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ServicesComponent } from "../services/services.component";
import { ProductsComponent } from "../products/products.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { DemoComponent } from "../demo/demo.component";
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { CustomPipeComponent } from "../custom-pipe/custom-pipe.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, FirstComponent, SecondComponent, CustomPipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  //  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnChanges, OnInit, DoCheck{

  check  = 0
  constructor(){
    console.log('Home Constructor called...')
  }
  inputValue: any = ""
  onClick(value: any){
    this.inputValue = value
    // this.inputValue.push(value)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Home OnChanges called...")
  }

  ngOnInit(): void {
    console.log("Home OnInit called....")
    setInterval(()=>{this.check++
      // console.log("Check Value: ", this.check)
    }, 1000)
  }

  ngDoCheck(): void {
    // console.log("Home DoCheck called...")
  }
}
