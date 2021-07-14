import { Component, OnInit } from '@angular/core';
import { NoticiaModelo } from '../models/noticias.model';
import { NoticiasService } from '../api/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  static END_POINT= 'home'
  public noticia: NoticiaModelo[];
  
  constructor(private noticiaservice: NoticiasService){

    this.noticia=[];
  }

  ngOnInit(): void {
    this.synch();
  }
  synch(): void{
    this.noticiaservice.getAllNews().subscribe(data => {
      this.noticia =data;
      console.log(data)
    });

  }

}
