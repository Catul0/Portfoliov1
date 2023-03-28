import { Component, OnInit } from '@angular/core';
import { Subscription }  from 'rxjs';
import { ObtenerDatosService } from 'src/app/services/obtener-datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  color:string="orange";
  habilidades:any;
  subscription?: Subscription;
  constructor(
    private obtenerDatos:ObtenerDatosService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      this.habilidades=data.misSkills;
    })
  }
  obtenerColor(skill: any){
    if(skill.nivel=="Very Good"){
      return this.color="rgb(7, 88, 7)";
    }else if(skill.nivel=="Good"){
      return this.color="green";
    }else if(skill.nivel=="Low"){
      return this.color="rgb(18, 216, 18)";
    }else if(skill.nivel=="Medium"){
      return this.color="rgb(13, 153, 13)";
    }else{
      return this.color="orange";
    }
    return 
  }
}
