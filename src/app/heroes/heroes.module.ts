import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

//a-module para hacer magia

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[ //to lo que se quiera exponer afuera
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
