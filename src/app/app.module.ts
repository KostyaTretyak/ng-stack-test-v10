import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgStackFormsModule } from '@ng-stack/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgStackFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
