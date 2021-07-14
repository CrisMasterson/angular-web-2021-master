import { Component, OnInit } from '@angular/core';
import { EventosService } from '../api/eventos.service';
import { EventoModelo } from '../models/eventos.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  static END_POINT= 'home'
  public event: EventoModelo[];
  
  constructor(private eventosService: EventosService){

    this.event=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.eventosService.getAllEvents().subscribe(data => {
      this.event =data;
      console.log(data)
    });

  }


}
