import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div class="container">
    Hello Header!!!!
  </div>`
})

export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
