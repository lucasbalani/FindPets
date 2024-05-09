import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LostAnimalReport } from '../models/lost-animal-report.model';

const _CONTROLLER = "LostAnimalReports";

@Injectable({
  providedIn: 'root'
})
export class LostAnimalReportService {

  constructor(
    private _http: HttpClient
  ) { }

  list(): Observable<LostAnimalReport[]> {
    return this._http.get<LostAnimalReport[]>(`${environment.coreApi}/${_CONTROLLER}`);
  }

  create(lostAnimalReport: LostAnimalReport): Observable<LostAnimalReport> {
    return this._http.post<LostAnimalReport>(`${environment.coreApi}/${_CONTROLLER}`, lostAnimalReport)
  }
}
