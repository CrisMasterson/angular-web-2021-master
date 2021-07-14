import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EventoModelo } from '../models/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url='http://localhost:8080/api/v1/events';
  constructor(private http: HttpClient) {

   }

  getAllEvents(): Observable<any> {

    let direccion = this.url;
    return this.http.get<EventoModelo[]>(direccion);
  }

   /*getAllEvents(): Observable <any>{
    return this.http.get(this.url).pipe(
      map(response => response), catchError(error => {
          alert(error.error);
          return error;
        }
      )
    );
  }*/
    
}
