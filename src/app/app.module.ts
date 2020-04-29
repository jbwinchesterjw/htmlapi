import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { NavesComponent } from './naves/naves.component';
import { from } from 'rxjs';
import { PlanetsComponent } from './planets/planets.component';
import { RotaModule } from './rota.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FilmsComponent,
    PeopleComponent,
    SpeciesComponent,
    NavesComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RotaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
