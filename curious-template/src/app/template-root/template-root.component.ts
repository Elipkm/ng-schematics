import { Component } from '@angular/core';
import { CuriousLayoutComponent } from "../curious-layout/curious-layout.component";

@Component({
  selector: 'app-template-root',
  imports: [CuriousLayoutComponent],
  templateUrl: './template-root.component.html',
  standalone: true,
  styleUrl: './template-root.component.css'
})
export class TemplateRootComponent {

}
