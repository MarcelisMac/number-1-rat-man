import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Marcelis'
  input: string;
  output: string;

  verplaats() {
    this.output = this.input;
    this.input = '';
  }
}