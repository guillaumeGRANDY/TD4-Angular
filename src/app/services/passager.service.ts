import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IPassagerDto, Passager} from "../models/passager.model";

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http: HttpClient) { }

  getPassagers(): Observable<Passager[]> {
    return this.http.get<any>(`https://randomuser.me/api?results=20&inc=name,picture,email&seed=$%7bicao%7d`).pipe(
      map((response) => response.results
        .map((dto: IPassagerDto) => new Passager(dto))
      ));
  }
}
