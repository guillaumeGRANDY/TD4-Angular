import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import {IAeroport} from "../../models/aeroport.model";
import {Subscription} from "rxjs";
import {PassagerService} from "../../services/passager.service";
import {Passager} from "../../models/passager.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})

export class ViewAirFranceComponent implements OnDestroy, OnInit {

  @Input() selectedFlight!: Vol;

  vols: Vol[] = [];
  passagers: Passager[]= [];
  serviceVol:VolService;
  servicePassager:PassagerService;
  serviceSouscription:Subscription = new Subscription();
  type:any;


  constructor(private _volService: VolService, private _passagerService:PassagerService, private _activateRoute: ActivatedRoute) {
    this.serviceVol=_volService;
    this.servicePassager=_passagerService;
  }

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
    if(this.type=='decollages') {
      this.serviceSouscription.add(this.serviceVol.getVolsDepart(filtres.aeroport.icao, filtres.debut.getTime() / 1000, filtres.fin.getTime() / 1000).subscribe({
        next: value => this.vols = value,
        error: error => console.error(error.toString()),
        complete: () => console.log(this.vols)
      }));
    }
    else{
      this.serviceSouscription.add(this.serviceVol.getVolsArrivee(filtres.aeroport.icao, filtres.debut.getTime() / 1000, filtres.fin.getTime() / 1000).subscribe({
        next: value => this.vols = value,
        error: error => console.error(error.toString()),
        complete: () => console.log(this.vols)
      }));
    }
  }

  onFilghtClick(vol:Vol):void
  {
    this.serviceSouscription.add(this.servicePassager.getPassagers().subscribe(
      {
        next: value => this.passagers = value,
        error: error => console.error(error.toString()),
        complete: () => console.log(this.vols)
      }
    ));
  }


  ngOnInit(): void {
    this.serviceSouscription.add(this._activateRoute.data.subscribe((data$)=>
    {
      this.type= data$['type'] ? data$['type']: 'decollages';
    }));
  }

  ngOnDestroy() {
    this.serviceSouscription.unsubscribe();
  }

}
