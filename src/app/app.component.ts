import { ChangeDetectionStrategy, Component } from '@angular/core';
import content from '../assets/data/content.json';
import projectData from '../assets/data/project.json';
import experienceData from '../assets/data/experience.json';
import educationData from '../assets/data/education.json';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {
  AboutContent,
  Certification,
  EducationEntry,
  ExperienceEntry,
  FooterContent,
  Personal,
  Project,
  Section,
  SkillGroup,
} from './core/models/portfolio.models';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly personal: Personal = content.myData;
  protected readonly about: AboutContent = content.about;
  protected readonly skillGroups: SkillGroup[] = content.skillGroups;
  protected readonly projects: Project[] = projectData.projects as unknown as Project[];
  protected readonly experience: ExperienceEntry[] = experienceData.experience;
  protected readonly education: EducationEntry[] = educationData.education;
  protected readonly certifications: Certification[] = educationData.certifications;
  protected readonly footer: FooterContent = content.footer;

  protected readonly sections: Section[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    ...(this.experience.length ? [{ id: 'experience', label: 'Experience' }] : []),
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
}
