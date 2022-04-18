import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `<div class="bg-dark p-5 text-center text-white">
        Sidebar component
    </div>`
})

export class SideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}