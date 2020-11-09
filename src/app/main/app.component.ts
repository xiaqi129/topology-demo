import { Component } from '@angular/core';
import * as $ from 'jquery';

$(window).on('load', function (event) {
  $('.preloader').delay(500).fadeOut(500);
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  public title = 'network-demo';
  constructor() {

  }
}
