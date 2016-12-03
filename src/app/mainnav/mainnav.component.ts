import { Component } from '@angular/core';

@Component({
  selector: 'mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.sass']
})
export class MainnavComponent {

  state = false;

  constructor() { }

  close_nav(){
    console.log("Cerrando nav");
    this.state = true;
  }

}
