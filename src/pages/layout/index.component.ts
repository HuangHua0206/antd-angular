import { Component } from '@angular/core';
console.log(Component, 'ComponentComponentComponent')

@Component({
  selector: 'app-main',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class LayoutComponent {
  title = 'my-layout';
}
