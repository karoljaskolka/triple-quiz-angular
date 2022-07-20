import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  NotificationsComponent,
  NotificationComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, TranslateModule],
  exports: [COMPONENTS],
})
export class SharedGeneralComponentsModule {}
