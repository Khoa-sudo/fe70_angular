import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props',
  template: `<div class="container">
    <h3>Input</h3>
    <h4>@Input tương tự như props trong REACT</h4>
    <app-product-list></app-product-list>
  </div>`,
})
export class PropsComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}
}


