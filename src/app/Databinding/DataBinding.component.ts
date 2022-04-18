import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `<div class="container">
      <h3>Data Binding</h3>
      <app-oneway></app-oneway>
      </div>`,
})
export class DataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
