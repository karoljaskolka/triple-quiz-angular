import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { SharedGeneralComponentsModule } from './shared/components/general/shared-general-components.module';
import { AuthInterceptor } from './core/interceptors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { quizzesReducer } from './core/store/quizzes/quizzes.reducers';
import { QuizzesEffects } from './core/store/quizzes/quizzes.effects';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    SharedGeneralComponentsModule,
    StoreModule.forRoot({ quizzesState: quizzesReducer }),
    EffectsModule.forRoot([QuizzesEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
