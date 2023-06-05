import {Directive, ElementRef, Input} from '@angular/core';
import {ClasseVol} from "../../models/passager.model";

@Directive({
  selector: '[appPassengerClasse]'
})
export class PassengerClasseDirective {
  @Input() appPassengerClasse!: string;
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el
    //el.nativeElement.style.background = this.appProductBackground.type == 'fruit' ? 'green' : 'orange;'
  }
  ngOnChanges() {
    switch (this.appPassengerClasse) {
      case ClasseVol.BUSINESS:
        this.el.nativeElement.style.color='RED';
        break;
      case ClasseVol.PREMIUM:
        this.el.nativeElement.style.color='GREEN';
        break;
      case ClasseVol.STANDARD:
        this.el.nativeElement.style.color='BLUE';
        break;
      default:
        this.el.nativeElement.style.color='BLACK';
        break;
    }

  }
}
