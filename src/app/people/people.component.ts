import { Component, OnInit } from '@angular/core';
import { People } from '../Modelos/People/People';
import { ServiceService } from '../service/service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people : People[];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.listar();
  }

  private listar():void{
    this.service.listarpeople().subscribe(retorno =>{
      this.people = retorno
    })
  }

  formularioBuscar = new FormGroup({
    nome : new FormControl(''),
  })
}
