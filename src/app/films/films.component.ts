import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Films } from '../Modelos/Films/Films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : Films[];
  constructor(private service : ServiceService) { }

  ngOnInit() {
    this.listar();
  }

  private listar():void{
    this.service.listarFilms().subscribe(retorno =>{
      this.films = retorno
    })
  }

}
