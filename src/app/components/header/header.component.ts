import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BuiltInPipesComponent } from "../built-in-pipes/built-in-pipes.component";
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule, BuiltInPipesComponent, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  preserveWhitespaces: true
})
export class HeaderComponent implements OnInit{
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    // this.activatedRoute.fragment.subscribe(data => {
    //   console.log(data)
    //   this.jumpToSection(data)
    // })
  }

  // jumpToSection(section: any){
  //   document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  // }

}
