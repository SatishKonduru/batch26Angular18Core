import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-contentparent',
  standalone: true,
  imports: [],
  templateUrl: './contentparent.component.html',
  styleUrl: './contentparent.component.css'
})
export class ContentparentComponent {
// @ContentChild(ContentChildComponent) cChild : ContentChildComponent

@ContentChildren(ContentChildComponent) cChildren : QueryList<ContentChildComponent>
cData : any
cArray : any[] = []
getChildData(){
  // console.log("Child Data: ", this.cChild.childData)
  // this.cData = this.cChild.childData
  this.cChildren.forEach((x) => {
    this.cArray.push(x.childData)
  } )

}
}
