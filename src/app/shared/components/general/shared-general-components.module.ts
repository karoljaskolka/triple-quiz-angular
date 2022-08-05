import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { SharedCommonComponentsModule } from '../common/shared-common-components.module';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  NotificationsComponent,
  NotificationComponent,
  LanguageSwitchComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    FontAwesomeModule,
    SharedDirectivesModule,
    SharedCommonComponentsModule,
  ],
  exports: [COMPONENTS],
})
export class SharedGeneralComponentsModule {}
