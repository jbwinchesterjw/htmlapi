import { Component, OnInit } from '@angular/core';
import { Starships } from '../Modelos/Starships/Starships';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves : Starships [];
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.listar();
  }

  private listar():void{
    this.service.listarStarships()
    .subscribe(retorno =>{
      this.naves = retorno
    })
  }

}
