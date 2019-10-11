import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioTesteableService {

  constructor(private http: HttpClient) { 

  }

  public doAPICall(url:string): any{
    return this.http.get(url, {responseType: 'json'});
  }
}
