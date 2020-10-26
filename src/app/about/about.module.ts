import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [AboutComponent, CardComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
