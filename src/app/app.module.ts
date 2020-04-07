import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [INTERSEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
