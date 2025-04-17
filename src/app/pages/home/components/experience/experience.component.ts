import { Component, inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component'
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent, LinkButtonComponent, CommonModule],
  template: `
    <section id="experience" class="py-12">
      <app-title>Experience</app-title>

      <ul class="mt-10 flex flex-col gap-6">
        @for (experience of experiences; track $index) {
          <li>
            <div
              class="rounded-xl border border-neutral-700 bg-neutral-900/30 p-6 transition-all hover:border-cyan-500 hover:shadow-lg"
            >
              <h3 class="text-xl font-bold text-cyan-400">
                {{ experience.title }}
              </h3>
              <div class="text-sm text-neutral-400 mb-2 italic">
                {{ experience.company }} • {{ experience.date }}
              </div>

              <p class="text-base text-neutral-300 mb-4">
                {{ experience.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  *ngFor="let tech of experience.techStack"
                  class="bg-cyan-600/10 text-cyan-300 px-2 py-1 rounded-md text-xs font-semibold"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
})
export class ExperienceComponent {
  private mainService = inject(MainService);

  experiences: Experience[] = [
    {
      title: 'Full-Stack Intern – Radema Project',
      company: 'Zynerator',
      techStack: ['Angular', 'Spring Boot', 'TypeScript', 'Java'],
      description:
        'Currently working on a web-based Task Manager for Radema using Angular and Spring Boot. I’m contributing to the UI/UX design, implementing API integrations, and managing tasks and user interactions across the application. This project allows me to deepen my skills in enterprise-level web development.',
      date: 'March 2025 – Present',
    },
    {
      title: 'Web Development Intern',
      company: 'JB Smart Company',
      techStack: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
      description:
        'Developed a car rental web application from scratch. I was responsible for dynamic forms, managing chauffeur availability, and ensuring a professional UI using React and Tailwind CSS. Gained hands-on full-stack experience and strengthened my problem-solving skills.',
      date: 'June – July 2024',
    },
    {
      title: 'Intern – Graphic & Web Support',
      company: 'ImaneCopie',
      techStack: ['WordPress', 'HTML', 'CSS', 'Canva'],
      description:
        'Assisted with website updates, layout design, and branding. Supported clients by maintaining WordPress sites and producing visual content for printing and digital formats.',
      date: 'March – April 2024',
    },
  ];
}
