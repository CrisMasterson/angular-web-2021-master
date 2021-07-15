import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventosService } from './api/eventos.service';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { GruposComponent } from './grupos/grupos.component';
import { AreasComponent } from './areas/areas.component';
import { enableProdMode } from '@angular/core';
import { NoticiasComponent } from './noticias/noticias.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    EventsComponent,
    GruposComponent,
    AreasComponent,
    NoticiasComponent,
    CarrouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    EventosService
  ],
  entryComponents: [AppRoutingModule.COMPONENT_FACTORY],
  bootstrap: [AppComponent]
})
export class AppModule { }
