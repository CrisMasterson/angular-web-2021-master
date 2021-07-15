import { Component, OnInit } from '@angular/core';
import { EventosService } from '../api/eventos.service';
import { EventoModelo } from '../models/eventos.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  static END_POINT = 'home'
  public event: EventoModelo[];

  constructor(private eventosService: EventosService,public dialog:MatDialog) {

    this.event = [];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void {
    this.eventosService.getAllEvents().subscribe(data => {
      this.event = data;
      console.log(data)
    });

  }

  see(evento:EventoModelo):void{
    const dialogRef=this.dialog.open(ModalComponent);
    dialogRef.componentInstance.evento=evento;
    dialogRef.afterClosed().subscribe(result=>console.log(result));
    
  }


}
