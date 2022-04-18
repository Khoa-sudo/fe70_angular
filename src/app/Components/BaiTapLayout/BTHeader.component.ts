import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-header',
  template: `<div class="header">This is header component</div>`,
  styles: [
    `
        .header{
            background-color:green;
            color:#fff;
            padding:15px;
            text-align:center;
        }
    `,
  ],
})//Các css trong thuộc tính styles chỉ áp dụng cho 1 component này thôi
export class BTHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
