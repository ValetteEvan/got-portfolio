import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContinentModel} from '../models/continent.model';


@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);

  public getAllContinents() : Observable<ContinentModel[]> {
    return this.httpClient.get<ContinentModel[]>(this.continentsUrl);
  }
}
