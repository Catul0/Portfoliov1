import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../../services/obtener-datos.service';
import { Subscription }  from 'rxjs';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: any;
  subscription?: Subscription;

  constructor(
    private datosPorfolio:ObtenerDatosService
  ) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( proyectos =>{
      this.proyectos = proyectos.misProyectos;
    })
  }
}
