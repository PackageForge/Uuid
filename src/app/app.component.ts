import { Component } from '@angular/core';
import { generateUuid, extractUuid, uuidsEqual } from 'projects/uuid/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uuid';
  uuid = generateUuid();
  constructor() {
    const copy = extractUuid("made a uuid" + this.uuid)!.toUpperCase();
    console.log(uuidsEqual(this.uuid, copy));
  }
}
