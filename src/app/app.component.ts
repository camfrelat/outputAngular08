import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public onomatopoeias: string[] = [];

  onReceiveNewOnomatopia($event: string) {
    this.onomatopoeias.push($event);
  }
}
