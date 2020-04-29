import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { NavesComponent } from './naves/naves.component';
import { FilmsComponent } from './films/films.component';
import { combineAll } from 'rxjs/operators';
import { SpeciesComponent } from './species/species.component';

const route : Routes = [
  {path : 'listarPeople', component : PeopleComponent},
  {path : 'listarPlanets', component : PlanetsComponent },
  {path : 'listarNaves', component : NavesComponent},
  {path : 'listarFilms', component : FilmsComponent},
  {path : 'listarSpecies', component : SpeciesComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ]
})
export class RotaModule { }
