import { Component, Input } from '@angular/core';
import { Personal, Projects } from './classes';
import content from "../assets/data/content.json";
import projectData from "../assets/data/project.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  checked!:boolean;

  myData:Personal = content.myData;
  projects:Projects[] = projectData.projects;
  aboutMe = content.about;
  footer = content.footer;

  

  
}
