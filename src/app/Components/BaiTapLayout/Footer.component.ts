import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<div class="bg-danger p-5 text-white">
        Footer component
    </div>`
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}