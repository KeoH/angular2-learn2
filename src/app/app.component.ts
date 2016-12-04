import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { MainheaderComponent } from './mainheader/mainheader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  public constructor(private titleService: Title){
    this.titleService.setTitle(this.title);
  }

}
