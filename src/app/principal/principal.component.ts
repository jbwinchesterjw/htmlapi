import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  formulario1 = true;
  formulario2 = true;
  formulario3 = true;
  formulario4 = true;
  formulario5 = true;
  formulario6 = true;


  listarPeople(){
    this.router.navigate(["listarPeople"]);
  }

  listarPlanets(){
    this.router.navigate(["listarPlanets"]);
  }

  listarNaves(){
    this.router.navigate(["listarNaves"]);
  }

  listarVehicles(){
    this.router.navigate(["listarVehicles"]);
  }

  listarFilms(){
    this.router.navigate(["listarFilms"]);
  }

  listarSpecies(){
    this.router.navigate(["listarSpecies"]);
  }

}
