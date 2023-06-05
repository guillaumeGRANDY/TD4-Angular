import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vol} from "../../models/vol.model";

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols: Vol[] = [];
  @Output() selectedFlightEvenement:EventEmitter<Vol>=new EventEmitter<Vol>();
  @Input() isTakeOff!: boolean;

  onClick(vol:Vol):void
  {
    this.selectedFlightEvenement.emit(vol)
  }
}
