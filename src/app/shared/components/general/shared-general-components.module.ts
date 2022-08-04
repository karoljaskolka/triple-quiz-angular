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
  imports: [CommonModule, TranslateModule, RouterModule, FontAwesomeModule],
  exports: [COMPONENTS],
})
export class SharedGeneralComponentsModule {}
