import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Species } from '../Modelos/Species/Species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species : Species[];
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.listar();
  }

  private listar():void{
    this.service.listarSpecies().subscribe(retorno =>{
      this.species = retorno
    })
  }

}
