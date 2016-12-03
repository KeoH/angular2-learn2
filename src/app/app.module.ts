import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainnavComponent } from './mainnav/mainnav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    MainnavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
