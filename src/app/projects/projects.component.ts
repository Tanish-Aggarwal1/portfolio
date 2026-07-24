import { Component, Input } from '@angular/core';
import { Projects } from '../classes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects!:Projects[];

  projectName:string = "";

  filteredData!:Projects[];

  showProjects(name: string) {
    if (name === '') {
      this.filteredData = this.projects
    } else {
      this.filteredData = this.projects.filter((project) => project.title.toLowerCase().includes(name.toLowerCase()))
    }
  }

  

}
