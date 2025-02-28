import { Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(name) %>-template',
  imports: [],
  standalone: true,
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrl: './<%= dasherize(name) %>.component.css'
})
export class <%= classify(name) %>Component {

  preference: string = '<%= preference %>';
}
