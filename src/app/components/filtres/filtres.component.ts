import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { FiveDayRangeSelectionStrategy } from 'src/app/date-adapter';
import { IAeroport } from 'src/app/models/aeroport.model';
import { AEROPORTS } from './../../constants/aeroport.constant';
import { FormControl, Validators } from '@angular/forms';
import {IFiltres} from "../../models/filtres.model";

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
  encapsulation: ViewEncapsulation.None
})
export class FiltresComponent {

  /**
   * La liste des aéroports disponibles est une constante,
   * on n'utilise que les principaux aéroports français pour l'instant
   */
  aeroports: IAeroport[] = AEROPORTS;

  destinationControl: FormControl=new FormControl(null, Validators.required);

  beginDateControl: FormControl= new FormControl(null,Validators.required);
  endDateControl: FormControl= new FormControl(null, Validators.required);

  @Output() filtreSender: EventEmitter<IFiltres>=new EventEmitter<IFiltres>();

  onClick():void {

    if (this.destinationControl.value != null && this.beginDateControl.value != null && this.endDateControl.value != null)
    {
      this.filtreSender.emit(
        {
          aeroport: this.destinationControl.value,
          debut: this.beginDateControl.value,
          fin: this.endDateControl.value,
        });
    }
  }
}
