import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `<div class="bg-warning p-5 text-white">Content</div>`
})

export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}