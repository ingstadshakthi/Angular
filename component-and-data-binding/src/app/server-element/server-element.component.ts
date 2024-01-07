import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent {
  @Input() element: {
    name: string;
    content: string;
    type: string;
  };
}
