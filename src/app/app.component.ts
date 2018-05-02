import { Component } from '@angular/core';
import { MaxService } from './max.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Greg';
  subtitle = "Angular 5 Class at MAX Technical Training";
  names: string[] = [
    "Barbara", "Tamara", "Will", "Keith", "Greg"
  ];
  showAngularImage: boolean = true;

  aboutText: string = "from App.component, about component created by Greg Doud";

  buttonClick(): void {
    this.showAngularImage = !this.showAngularImage;
  }

  constructor(private max: MaxService) {
    console.log(this.max.about);
  }
}
