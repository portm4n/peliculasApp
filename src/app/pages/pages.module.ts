import { BuscarComponent } from './buscar/buscar.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PeliculaComponent } from './pelicula/pelicula.component';

@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [
    CommonModule, ComponentsModule
  ]
})
export class PagesModule { }
