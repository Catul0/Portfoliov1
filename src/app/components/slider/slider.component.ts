import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from 'src/app/services/obtener-datos.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slider: any;
  carrusel:any;
  constructor(private datosPorfolio:ObtenerDatosService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( proyectos =>{
      this.slider = proyectos.misProyectos;
    })
  }
  

}
