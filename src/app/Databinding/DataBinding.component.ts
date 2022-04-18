import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `<div class="container">
      <h3>Data Binding</h3>
      <app-oneway></app-oneway>
      <hr/>
      <app-twoway></app-twoway>
      <hr>
      <h3>Bài tập</h3>
      <app-bt-binding></app-bt-binding>
      </div>`,
})
export class DataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
