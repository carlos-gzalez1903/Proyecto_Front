import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private URL = 'http://localhost:8080/location';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<any>(this.URL);
  }

  postLocation(nameLocation: string, areaM2: number) {
    return this.http.post<any>(this.URL, {name: nameLocation, areaM2});
  }
}
