import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'about-comp',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() abouttxt: string;

  aString: string = "This is only a test of the emergency broadcasting";

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
