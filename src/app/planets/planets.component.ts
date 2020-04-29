import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Planets } from '../Modelos/Planets/Planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets : Planets[];
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.listar();
  }

  private listar():void{
    this.service.listarPlanets().subscribe(retorno =>{
      this.planets = retorno
    })
  }

}
