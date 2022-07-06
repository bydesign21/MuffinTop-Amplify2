import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AmplifyAuthenticatorModule} from '@aws-amplify/ui-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ReadEmployeesComponent } from './read-employees/read-employees.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ReadEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    
  ],
  exports:[
  AmplifyAuthenticatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
