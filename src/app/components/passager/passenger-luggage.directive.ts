import {Directive, ElementRef, Input} from '@angular/core';
import {ClasseVol, Passager} from "../../models/passager.model";

@Directive({
  selector: '[appPassengerLuggage]'
})
export class PassengerLuggageDirective {

  @Input() appPassengerLuggage!: Passager;
  el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el
  }
  ngOnChanges() {
    if((this.appPassengerLuggage.classeVol==ClasseVol.PREMIUM && this.appPassengerLuggage.nbBagagesSoute>3)||
      (this.appPassengerLuggage.classeVol==ClasseVol.BUSINESS && this.appPassengerLuggage.nbBagagesSoute>2)||
      (this.appPassengerLuggage.classeVol==ClasseVol.STANDARD && this.appPassengerLuggage.nbBagagesSoute>1))
    {
      this.el.nativeElement.style.backgroundColor ='#FFA9A9';
    }
  }
}
