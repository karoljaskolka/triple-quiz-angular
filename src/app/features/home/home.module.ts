import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { SharedFormComponentsModule } from '../../shared/components/form/shared-form-components.module';
import { SharedComponentsModule } from '../../shared/components/shared/shared-components.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    SharedFormComponentsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
