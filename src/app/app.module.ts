import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalBroadcastService, MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '0829e7fc-b450-433e-9606-f6f1f4a3736d',
      redirectUri: 'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
