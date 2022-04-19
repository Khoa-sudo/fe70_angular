import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<div>
    <div class="card text-left">
      <img class="card-img-top" src="holder.js/100px180/" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          <ng-content selector=".name"></ng-content>
        </h4>
        <p class="card-text text-danger">
          <ng-content selector=".price"></ng-content>
        </p>
      </div>
    </div>
  </div>`,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
