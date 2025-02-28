import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateRootComponent } from "./template-root/template-root.component";

@Component({
  selector: 'app-root',
  imports: [TemplateRootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curious-template';
}
