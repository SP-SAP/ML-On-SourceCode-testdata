import { Component } from '@angular/core';
import {getUnique} from "./utils/functions"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MLOS';

  unsortedUnUniqueArray = [9, 8, 8,9, 9, 9, 8, 8, 9]

  showUnique(b) {
    return getUnique(b)
  }

}
