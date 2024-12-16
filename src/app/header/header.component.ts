import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, // default set to true in versions >= 19
    // template: '<h1>{{ title }}</h1>',
    templateUrl: './header.component.html',
    // styles: ['{h1: {color: red}}'],
    // styleUrl: './header.component.css',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = 'first-angular-app';
}