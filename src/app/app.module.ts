import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DataService } from './data.service';
import { SupportingApplicationComponent } from './supporting-application/supporting-application.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    SupportingApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
