import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  number: number = 1;
  string: string = '';
  boolean : boolean = true;
  null = null;
  u: undefined = undefined;
}
