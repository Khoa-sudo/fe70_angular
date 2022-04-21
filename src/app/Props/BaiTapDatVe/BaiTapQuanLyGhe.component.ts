import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-quan-ly-ghe',
    template: `<div>
        <div>Form</div>
        <app-bai-tap-dat-ghe></app-bai-tap-dat-ghe>
    </div>`
})

export class BaiTapQuanLyGheComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}