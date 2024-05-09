import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AnimalType } from '../models/animal-type.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {

  constructor(
    private _http: HttpClient
  ) { }

  list(): Observable<AnimalType[]> {
    return this._http.get<AnimalType[]>(`${environment.petsApi}/AnimalTypes`);
  }
}
