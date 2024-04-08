import { SharedModule } from './../shared/shared.module';
import { HomeRouter } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouter, SharedModule],
})
export class HomeModule {}
