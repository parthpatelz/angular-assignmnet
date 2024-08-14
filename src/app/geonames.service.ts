import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeonamesService {

  private apiUrl = 'https://geogratis.gc.ca/services/geoname/en/geonames?q=Toronto';

  constructor(private http: HttpClient, private router: Router) {}

  fetchGeonames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
