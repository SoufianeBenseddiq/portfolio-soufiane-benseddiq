import { Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-skills',
  imports: [TitleComponent],
  standalone: true,
  template: `
    <section id="skills" class="py-10 px-4">
      <app-title>Skills</app-title>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        @for (skill of skills; track $index) {
          <div class="rounded-xl border border-neutral-700 bg-neutral-900 p-4 shadow-md hover:scale-105 transition-transform">
            <h3 class="text-cyan-400 font-semibold text-lg mb-2">{{ skill.name }}</h3>
            <p class="text-sm text-neutral-400 leading-snug">{{ skill.description }}</p>
          </div>
        }
      </div>
    </section>

  `,
})
export class SkillsComponent implements OnInit {
  private mainService = inject(MainService);

  skills: { name: string; description: string }[] = [];

  ngOnInit(): void {
    this.skills = [
      { name: 'HTML & CSS', description: 'Structuring and styling modern, responsive UIs' },
      { name: 'JavaScript', description: 'Dynamic behavior and interactivity for the web' },
      { name: 'React.js', description: 'Building dynamic UIs with Axios, state, and Tailwind' },
      { name: 'Angular', description: 'Component-driven architecture with services and routing' },
      { name: 'TypeScript', description: 'Strongly-typed JavaScript for scalable apps' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS for clean and responsive designs' },
      { name: 'Bootstrap', description: 'Quick layout and styling with components' },
      { name: 'PHP', description: 'Server-side logic and CRUD operations' },
      { name: 'MySQL', description: 'Relational database management and querying' },
      { name: 'Java (OOP)', description: 'Object-oriented programming and backend logic' },
      { name: 'C', description: 'Low-level programming and algorithm basics' },
      { name: 'Spring Boot', description: 'Java backend framework for APIs and logic' },
      { name: 'Appwrite', description: 'Modern backend as a service for web apps' },
      { name: 'Linux', description: 'Terminal usage, file systems, and basic commands' },
      { name: 'Git & GitHub', description: 'Version control and collaborative workflows' },
      { name: 'WordPress', description: 'CMS customization and site creation' },
      { name: 'UML', description: 'Modeling software architecture and diagrams' },
      { name: 'Figma & Canva', description: 'UI/UX design and prototyping tools' },
    ];
  }
}
