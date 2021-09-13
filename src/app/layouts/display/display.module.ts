import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { HomeComponent } from './home/home.component';
import { BoardsComponent } from './boards/boards.component';


@NgModule({
  declarations: [HomeComponent, BoardsComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
