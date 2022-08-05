import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './views/score/score.component';
import { SharedCommonComponentsModule } from '../../shared/components/common/shared-common-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { ScoreItemComponent } from './components/score-item/score-item.component';
import { ScoreHeaderComponent } from './components/score-header/score-header.component';
import { ScoreItemsComponent } from './components/score-items/score-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ScoreComponent,
    ScoreItemComponent,
    ScoreHeaderComponent,
    ScoreItemsComponent,
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    SharedCommonComponentsModule,
    TranslateModule,
    FontAwesomeModule,
  ],
})
export class ScoreModule {}
