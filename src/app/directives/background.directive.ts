import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true
})
export class BackgroundDirective implements OnInit{

 
  constructor(private _element: ElementRef, private _renderer: Renderer2) { }
ngOnInit(): void {
  // this._element.nativeElement.style.backgroundColor = '#cdf'
  this._renderer.setStyle(this._element.nativeElement, 'background-color','#080')
}
@HostBinding('style.backgroundColor') bg : string = 'transaparent'
@HostListener('mouseenter') mouseenter(){
    // this._renderer.setStyle(this._element.nativeElement,'background-color','gold')
  this.bg = 'gold'
} 
@HostListener('mouseleave') mouseleave(){
  // this._renderer.setStyle(this._element.nativeElement,'background-color','#f00')
  this.bg = 'orange'
}


}
