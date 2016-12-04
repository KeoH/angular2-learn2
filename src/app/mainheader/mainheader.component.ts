import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.sass']
})
export class MainheaderComponent {

  menu_state = false;
  search_state = false;

  constructor() { }

}
