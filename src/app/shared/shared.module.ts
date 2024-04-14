import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BasicDetailsComponent } from './components/basic-details/basic-details.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BasicDetailsComponent,
    SocialLinksComponent,
    IntroductionComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, BasicDetailsComponent, IntroductionComponent, SocialLinksComponent],
})
export class SharedModule {}
