import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from "./components/interpolation/interpolation.component";
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { StyleBindingComponent } from "./components/style-binding/style-binding.component";
import { ClassBindingComponent } from "./components/class-binding/class-binding.component";
import { EventBindingComponent } from "./components/event-binding/event-binding.component";
import { TempRefVariablesComponent } from "./components/temp-ref-variables/temp-ref-variables.component";
import { IfComponent } from "./components/if/if.component";
import { SwitchCaseComponent } from "./components/switch-case/switch-case.component";
import { ForComponent } from './components/for/for.component';
import { SenderComponent } from "./components/sender/sender.component";
import { ViewChildComponent } from "./components/view-child/view-child.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ContentparentComponent } from "./components/contentparent/contentparent.component";
import { ContentChildComponent } from "./components/content-child/content-child.component";




@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, HeaderComponent, InterpolationComponent, PropertyBindingComponent, StyleBindingComponent, ClassBindingComponent, EventBindingComponent, TempRefVariablesComponent, IfComponent, SwitchCaseComponent, ForComponent, SenderComponent, ViewChildComponent, ParentComponent, ContentparentComponent, ContentChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true 
})
export class AppComponent {
  title = 'batch26Angular18Core';
}
