import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BasicDetailsComponent } from './components/basic-details/basic-details.component';

@NgModule({
  declarations: [HeaderComponent, BasicDetailsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, BasicDetailsComponent],
})
export class SharedModule {}
